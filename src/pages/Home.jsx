import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { contextApp } from "../App";
import Cookies from "js-cookie";
function Home() {

   const {login , setIsLogin} = useContext(contextApp)

//    localStorage.setItem('name','test4')
//    localStorage.setItem("name2",'fun')
    
//    sessionStorage.setItem("name3" , 'fun2')

//    Cookies.set('name', 'ali', {expires:7})

//    Cookies.get('name')

//    Cookies.set("key",'the expire time')


  return (
    <div className="flex flex-col shadow-lg h-screen">
      <NavBar />


      <h3 className="text-justify p-6 ">
        {
        login ? ( <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fuga
        asperiores deserunt quos aperiam sapiente dolore sed incidunt,
        consequatur quam dolorum reiciendis iste facere, ipsam laudantium
        possimus id repellendus ab sint sit magni placeat in tenetur. Maiores in
        voluptates labore, repellat consequuntur maxime facilis voluptate
        officiis aliquam! Inventore, autem eum ut aliquid ipsum esse obcaecati
        molestiae fugiat praesentium consectetur recusandae temporibus accusamus
        quae, animi odio. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Et ea est ducimus optio, animi minus hic nisi nemo ad quidem
        tempore deserunt itaque molestiae suscipit odit cum harum expedita
        impedit assumenda, officiis aut! Quibusdam eveniet maxime deleniti
        soluta impedit quod eaque ut aliquid fugiat harum perferendis beatae in,
        modi labore inventore tempora libero suscipit ad quae corporis iure? At
        magni atque velit, consectetur cum explicabo illo accusamus blanditiis
        eaque, eius quos voluptatem maxime iusto repellendus nobis quidem
        maiores distinctio quod? Nemo quia voluptatum perspiciatis dolore libero
        fugit, dolorum eveniet reprehenderit facere, ut possimus nobis laborum
        at molestias, provident et magnam quam neque! Obcaecati maxime
        voluptate, tempore odit alias totam quas illo inventore cum
        exercitationem illum ullam libero ratione eaque quis rem perspiciatis
        reiciendis, aut porro quam ut nesciunt molestiae. Distinctio ipsa ipsum
        fugiat eos obcaecati qui cumque, vel ratione dicta ipsam ex consectetur
        neque illo debitis deleniti vero, reprehenderit nostrum. Quos fuga
        veritatis molestias sit delectus eius optio quaerat ipsa dolores sint
        ullam nobis voluptates distinctio architecto mollitia error voluptatibus
        nostrum quasi accusamus in, nesciunt, saepe sapiente! Nemo eveniet
        nostrum tempore? Placeat, aut! Nesciunt facere atque distinctio tenetur
        fugiat saepe recusandae corrupti ad, soluta, eligendi, explicabo
        quibusdam debitis veritatis omnis.
        </p> 
    ):
    ( <h3>access is deneied</h3>
    )
}
</h3>


    
      <Footer />
    </div>
  );
}

export default Home;
