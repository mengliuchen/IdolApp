export const player= new QMplayer({loop:true})
import axios from 'axios'
export let play=false
export let musiclist={}
let len=0
export let musicinfo=[]
export let musicmid=[]
export let currentmusic={
  "name": "La Vie en Rose",
  "songmid": "001R81sn4TrldD",
  "albumid": "http://imgcache.qq.com/music/photo/album_300/11/300_albumpic_4879711_0.jpg",
  "lyc": ""
}
export let ind=0
export function getmusicinfo(){
  axios.get("https://easy-mock.com/mock/5ce215e3d7a2d534e30f9daa/izone_members/music").then(getmusicsuccess)
}
function getmusicsuccess(ret){
  let data=ret.data.data;
  musiclist=data;
  let mus=[];
  let mm=[]
  for(var key in data)
  {
    for(var i = 0;i<data[key].length;i++)
    {
      mus.push(data[key][i].songmid)
      mm.push(data[key][i])
    }
  }
  musicmid=mus;
  musicinfo=mm;
  len=mus.length;
  ind=mus.indexOf(currentmusic.songmid)
  if(player.state=="playing")
  {
    player.pause();
  }
  console.log(musiclist)
}
