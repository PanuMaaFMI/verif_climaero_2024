

title = 'Surface verification' 

framec='Goldenrod'

v[0] = ['V','V_VAR','PS','ps','f'];
t[0] = ['Fc length ver','Fc length var','Timeserie stat','Timeserie','Freq dist.'];
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL'] ;
t[3] = v[3] ;
v[4] = ['PS','TT','TD','FF','QQ','RH','PE24','VI'];
t[4] = ['Mslp','T2m','Td2m','U10m','Q2m','Rh2m','24h Precipitation','Visibility']
v[5] = [0] ;
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['00','06','12','18'] ;
t[6] = v[6] ;
mname = ['Type','Period','Station','Selection','Parameter','Level','Initial time']
loc = ['l','l','t','t','t','l','l']
spec_name =[0,1,2,3,6,4,5]

do_debug = false ; ;

help = 'climaero verification comparison'; hide_help = false ;
pdir ='Surface/'
ext='1.png'
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html']
