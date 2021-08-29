import './App.css'
import { RenderCard } from './RenderCard'
import pic from './images/klubnika.png'

export const App = () => {

const data = [
  {
    title: 'Physical Health',
    color: '#22356F',
    id: 1
  },
  {
    title: 'Mental Health',
    color: '#0052C1',
    id: 2

  },
  {
    title: 'Nutrition',
    color: null,
    img: pic, 
    id: 3
  },
  {
    title: 'Gymnastics',
    color: '#62D0DF',
    id: 4
  },
  {
    title: 'Crossfit',
    color: '#FFE2DE',
    id: 5

  },
  {
    title: 'Aerobics',
    color: '#8F00FF',
    id: 6
  },
]

  return(
    <div className='App' style={styles}>
     
      {
        data.map((el, id) => {
         return <RenderCard data={el} key={id}/>
        })
      }
     </div>
    
  )
 }


 const styles = {
   display: 'flex',
   justifyContent: 'space-between',
   width: '1200px',
   margin: '0 auto',
   flexWrap: 'wrap'
 }
 export default App;
