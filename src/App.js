import './App.css';
// import Header from "./Components/Header";
// import Picture from "./Components/Picture"
import UserCard from './Components/UserCard';
import Counter from './Counter';


function App() {
const user1 ={
    imgUrl:"http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png",
    imgAlt:"User1",
    name:"Arman Petrosyan",
    phone:"096-56-65-89",
    email:"arman.petrosyan@mail.ru",
    profession:"Junior developer"
}

const user2 ={
    imgUrl:"https://onlyawp.ru/files/avatars/no_avatar.jpg",
    imgAlt:"User2",
    name:"Hovsep Karapetyan",
    phone:"095-89-62-05",
    email:"h.karapetyan@gmail.com",
    profession:"Lawyer"
}

const user3 ={
    imgUrl:"https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
    imgAlt:"User3",
    name:"Maria Hovsepyan",
    phone:"098-10-55-78",
    email:"maria@gmail.com",
    profession:"Teacher"
}

const user4 ={
    imgUrl:"https://i.pinimg.com/474x/77/5b/91/775b91d4b1bfcac2aa3292b47763c1b1.jpg",
    imgAlt:"User4",
    name:"Gevorg Vardanyan",
    phone:"099-10-75-98",
    email:"g.karapetyan@gmail.com",
    profession:"Doctor"
}
    return (
        <div>
        {/* <Picture/>,
        <Header/> */}
            <div className="user">
                <UserCard imgUrl={user1.imgUrl} 
                          imgAlt={user1.imgAlt} 
                          name={user1.name} 
                          phone={user1.phone} 
                          email={user1.email}
                          profession={user1.profession}
                          />

                <UserCard imgUrl={user2.imgUrl} 
                          imgAlt={user2.imgAlt} 
                          name={user2.name} 
                          phone={user2.phone} 
                          email={user2.email}
                          profession={user2.profession}/>

                <UserCard imgUrl={user3.imgUrl} 
                          imgAlt={user3.imgAlt} 
                          name={user3.name} 
                          phone={user3.phone} 
                          email={user3.email}
                          profession={user3.profession}
                          dif={true}/>

                <UserCard imgUrl={user4.imgUrl} 
                          imgAlt={user4.imgAlt} 
                          name={user4.name} 
                          phone={user4.phone} 
                          email={user4.email}
                          profession={user4.profession}/>
            </div>
            
            <Counter />
        </div>
    
        
    )
}

export default App;
