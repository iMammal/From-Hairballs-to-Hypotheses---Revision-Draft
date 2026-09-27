from pathlib import Path
import csv,collections
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
p=Path(__file__).parent;r=list(csv.DictReader(open(p/'cumulative_supported_evidence_matrix.csv')))
assert len(r)==len({(x['system'],x['assistance_mode'],x['visualization_modality']) for x in r})==79
assert len({x['system'] for x in r})==50
modes=['Algorithmic','Adaptive','Conversational','Immersive'];mods=['Desktop/Planar','Large Display','VR','AR/MR','CAVE']
preferred=['PAE Viewer','focusedMDS / distnet','Echo','MinOmics','Interactive AI annotation in VR','Space-Time Hypercube','Liver MR navigation','Skin-lesion AR','iCAVE','Virtual Island','ExaViz','Facetto','Metis','SAMIRA','ASCRIBE-XR','FathomGPT','PhenoFlow']
alias={'Interactive AI annotation in VR':'AI annotation','Space-Time Hypercube':'Space-Time HC','Liver MR navigation':'Liver MR','focusedMDS / distnet':'focusedMDS / distnet','Patient-health dashboard':'Patient dashboard'}
c=canvas.Canvas(str(p/'cumulative_map.pdf'),pagesize=(800,540));c.setTitle('Assistance by Visualization Modality: cumulative supported placements')
def txt(x,y,t,size=10,bold=False):
 c.setFillColor(HexColor('#17222b'));c.setFont('Helvetica-Bold' if bold else 'Helvetica',size);c.drawString(x,540-y,t)
txt(100,23,'Assistance x Visualization Modality',17,True);txt(100,40,'88 systems considered; 60 accessible reports; 50 supported systems; 79 placements',10)
colors=['#237fa1','#b57616','#328269','#826494'];fills=['#edf5fa','#fff6e6','#eff8f2','#f5f0fa']
for j,mod in enumerate(mods):txt(106+j*136,60,mod,10,True)
for i,mode in enumerate(modes):
 y=70+i*90;c.setFillColor(HexColor(colors[i]));c.rect(5,540-y-90,92,90,fill=1,stroke=0);c.setFillColor(HexColor('#ffffff'));c.setFont('Helvetica-Bold',10 if mode=='Conversational' else 11);c.drawCentredString(51,540-y-47,mode)
 for j,mod in enumerate(mods):
  x=100+j*136;rows=[a for a in r if a['assistance_mode']==mode and a['visualization_modality']==mod];rows.sort(key=lambda a:preferred.index(a['system']) if a['system'] in preferred else 100)
  c.setFillColor(HexColor(fills[i] if rows else '#f6f6f6'));c.setStrokeColor(HexColor('#7e8992'));c.rect(x,540-y-90,136,90,fill=1,stroke=1)
  txt(x+104,y+14,'n='+str(len(rows)),9,True)
  if not rows:
   txt(x+10,y+45,'not represented',9);txt(x+10,y+59,'in assessed systems',9);continue
  shown=rows if len(rows)<=3 else rows[:2]
  for k,a in enumerate(shown):txt(x+7,y+29+k*18,alias.get(a['system'],a['system']),10);txt(x+7,y+38+k*18,a['task_symbols'],7)
  if len(rows)>3:txt(x+7,y+77,'+'+str(len(rows)-2)+' other systems',9)
txt(6,453,'Tasks: N navigation/multiscale; C comparison; F selection/filtering; S sensemaking; R coordination.',9)
c.setDash(3,3);c.setStrokeColor(HexColor('#657078'));c.rect(6,540-505,774,37,fill=0,stroke=1);c.setDash()
txt(12,482,'Uncounted boundaries: StarmapVis computation unresolved; Rapid QC-MS Adaptive unresolved;',9)
txt(12,497,'anatomical-model CAVE portability unverified; inaccessible reports excluded from placement counts.',9)
txt(6,524,'Cell totals are non-additive. Empty cells do not establish absence in the literature. No prevalence estimate.',9)
c.save()
