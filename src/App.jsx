import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { MyCard } from './components/MyCard/MyCard'

function App() {
    const dog1 = {
      title: 'Zeus',
      content: 'Lorem ipsumharum doloremque, necessitatibus culpa numquam voluptatem ipsam a cupiditate tempore provident Lorem ipsum dolor sit amet cons lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate eos doloribus maiores',
      breed: 'cocker spaniel america',
      image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      colorBadge: 'danger'
    }
    const dog2 = {
      title: 'Dante',
      content: 'dolore tempora harum doloremque, necessitatibus culpa numquam voluptatem ipsam a cupiditate lorem tempore provident necessitatibus culpaLorem ipsum dolor sit amet cons',
      breed: 'labrador retriever',
      image: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&q=80&w=1889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      colorBadge: 'warning'
    }
    const dog3 = {
      title: 'Apolo',
      content: 'adipisci dolore tempora harum doloremque, necessitatibus culpa numquam voluptatem ipsam a cupiditate tempore provident recusandae error reiciendis lorem ipsum dolor sit amet consectetur.',
      breed: 'setter irlandes',
      image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      colorBadge: 'success'
    }
    
  const dog4 = {
      title: 'Alaska',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate eos doloribus maiores lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate eos doloribus maiores',
      breed: 'Husky',
      image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      colorBadge: 'dark'
    }
  return (
    <>
      <div className="main">
      <Header title="adopta un perrito" />       
        <section className='cards' >
          <MyCard
            title={dog1.title}
            content={dog1.content}
            breed={dog1.breed}
            image={dog1.image}
            colorBadge={dog1.colorBadge}/>
          
          <MyCard
            title={dog2.title}
            content={dog2.content}
            breed={dog2.breed}
            image={dog2.image}
            colorBadge={dog2.colorBadge}/>
          
          <MyCard
            title={dog3.title}
            content={dog3.content}
            breed={dog3.breed}
            image={dog3.image}
            colorBadge={dog3.colorBadge}/>
          
          <MyCard
            title={dog4.title}
            content={dog4.content}
            breed={dog4.breed}
            image={dog4.image}
            colorBadge={dog4.colorBadge}/>
        </section> 
      <Footer/>
      </div>
    </>
  )
}

export default App
