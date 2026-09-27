from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
P = Path(__file__).resolve().parent
plt.rcParams.update({'font.family':'DejaVu Sans','svg.fonttype':'none','pdf.fonttype':42})
fig=plt.figure(figsize=(7.2,4.45)); ax=fig.add_axes([0,0,1,1]); ax.set_xlim(0,720);ax.set_ylim(445,0);ax.axis('off')
ink='#233444'; blue='#eaf1f6'; gray='#f3f3f3'
def text(x,y,t,size=8,bold=False,ha='center'):
 ax.text(x,y,t,fontsize=size,ha=ha,va='center',color=ink,fontweight='bold' if bold else 'normal',linespacing=1.3,bbox=dict(facecolor='white',edgecolor='none',pad=.1) if t.startswith(('46,487','Three related')) else None)
def box(x,y,w,h,t,fill=blue,size=8):
 ax.add_patch(FancyBboxPatch((x,y),w,h,boxstyle='round,pad=0,rounding_size=3',linewidth=.65,edgecolor=ink,facecolor=fill));text(x+w/2,y+h/2,t,size)
def arrow(points,dash=False):
 for a,b in zip(points[:-2],points[1:-1]): ax.plot([a[0],b[0]],[a[1],b[1]],color=ink,lw=.7,ls='--' if dash else '-')
 ax.add_patch(FancyArrowPatch(points[-2],points[-1],arrowstyle='-|>',mutation_scale=7,lw=.7,color=ink,linestyle='--' if dash else '-'))
text(170,14,'A  Identification and metadata screening',9,True)
text(540,14,'B  Purposeful full-report synthesis',9,True)
box(12,32,316,43,'187,446 source occurrences\nNine registered retrieval/import routes')
arrow([(170,75),(170,104)])
text(170,89,'46,487 surplus occurrences consolidated',7)
box(12,104,316,34,'140,959 canonical bibliographic records')
arrow([(170,138),(170,150)])
arrow([(12,121),(5,121),(5,218),(12,218)])
box(12,150,316,39,'Separate states: 110 protected; 35 failed;\n4 ambiguous; 0 genuinely unprocessed',gray,7.8)
# put connection beside the separate-state box
ax.lines[-1:] if False else None
box(12,201,316,34,'140,810 valid effective screenings')
arrow([(170,235),(170,249),(65,249),(65,262)])
arrow([(170,249),(170,262)])
arrow([(170,249),(275,249),(275,262)])
box(12,262,100,41,'9,505\nADVANCE',size=8.3)
box(120,262,100,41,'83,258\nDEFER',gray,8.3)
box(228,262,100,41,'48,047\nEXCLUDED',gray,8.3)
text(277,321,'Includes 10,460\nbackground flags',7)
arrow([(62,303),(62,345)])
box(12,345,208,46,'9,505 categorized candidates\nDescriptive, provisional coding',size=7.8)
text(170,416,'Effective outcomes count each record once.\nDeferral and technical failure are not exclusion.',7.3)
box(374,32,334,48,'384 selected report rows / 381 systems\n373 systems linked to candidate pool\n8 from additional discovery routes',size=7.7)
arrow([(220,368),(350,368),(350,55),(374,55)],True)
text(281,351,'Purposeful selection',7)
text(281,382,'Not exhaustive',7)
arrow([(541,80),(541,105)])
box(374,105,334,43,'Report access (384 rows)\n135 full reports; 1 abstract only; 248 unavailable',gray,7.7)
text(541,163,'Three related-report rows add no new system.',7)
arrow([(541,148),(541,178)])
box(374,178,334,42,'System assessment (381 systems)\n132 completed; 249 without completed assessment',size=7.7)
arrow([(541,220),(541,236),(422,236),(422,248)])
arrow([(541,236),(541,248)])
arrow([(541,236),(660,236),(660,248)])
box(374,248,96,43,'80\nEligible',size=8.3)
box(486,248,110,43,'19\nUnresolved',gray,8.3)
box(612,248,96,43,'33 Excluded /\ncontextual',gray,7.6)
arrow([(422,291),(422,312)])
box(374,312,334,47,'Map coverage within the 80 eligible systems\n76 with supported placements; 4 without',size=7.8)
arrow([(541,359),(541,382)],True)
box(374,382,334,31,'118 system–cell placements (multilabel)',size=8)
text(541,432,'System judgments remain subject to author adjudication.',7.2)
for ext in ['pdf','svg','png']:fig.savefig(P/f'study-selection-flow.{ext}',dpi=200,facecolor='white')
