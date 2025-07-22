import Pokemonbutton from "./button.tsx";

const Images = () => {
  return (
    <div>
      {/* First row of images */}
      <div className="Pokemon-img"> 
        <div className="img1-container">    
          <h3>Mewtwo</h3>
          <Pokemonbutton pokemonId={1}>
            <img src="https://th.bing.com/th/id/R.888c1c1100e006bcf7241b507065011a?rik=1XhmO0dQ2IvgHw&riu=http%3a%2f%2fsickr.files.wordpress.com%2f2011%2f09%2fmewtwo.jpg&ehk=zkGCPQ5eutMbvK4yIF2auMd964h6TyEUNqvB3ZCOadI%3d&risl=&pid=ImgRaw&r=0" alt="Mewtwo" />
          </Pokemonbutton>
        </div>
        <div className="img2-container">
          <h3>Charizard</h3>
          <Pokemonbutton pokemonId={2}>
            <img src="https://th.bing.com/th/id/OIP.1WWwONm09wHCoM7xLJ1iTQHaGQ?rs=1&pid=ImgDetMain" alt="Charizard"/>
          </Pokemonbutton>
        </div>
        <div className="img3-container">
          <h3>Rayquaza</h3>
          <Pokemonbutton pokemonId={3}>
            <img src="https://th.bing.com/th/id/OIP.l22sWFn43NI1G7ktndQXRQHaG1?rs=1&pid=ImgDetMain" alt="Rayquaza"/>
          </Pokemonbutton>
        </div>
        <div className="img4-container">
          <h3>Gyarados</h3>
          <Pokemonbutton pokemonId={4}>
            <img src="https://th.bing.com/th/id/R.98dabd21c855e973c6be4a8c57eb9bbb?rik=6tp1gCPc%2f735jQ&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20130520060414%2fsonicpokemon%2fimages%2f6%2f63%2fGyarados_AG_anime.png&ehk=rEU%2bO6d%2frsAswgYlMkQh6oEvKHx%2f8U9Y5iY8491wfTE%3d&risl=&pid=ImgRaw&r=0" alt="Gyarados"/>
          </Pokemonbutton>
        </div>
      </div>

      {/* Second row of images */}
      <div className="Pokemon2-img"> 
        <div className="img5-container">    
          <h3>Pikachu</h3>
          <Pokemonbutton pokemonId={5}>
            <img src="https://th.bing.com/th/id/OIP.dvAnwdjqIXDO3ZdgFzMDMQHaHz?rs=1&pid=ImgDetMain" alt="Pikachu"/>
          </Pokemonbutton>
        </div>
        <div className="img6-container">
          <h3>Garchomp</h3>
          <Pokemonbutton pokemonId={6}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a997f5cf-6a9b-4f01-bbcc-df9a140d542b/dgbcpj5-aa8789d9-933e-4232-97cf-1a6b8c638b63.png/v1/fill/w_712,h_612,q_80,strp/garchomp_by_alyssatheyoshigirl_dgbcpj5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEyIiwicGF0aCI6IlwvZlwvYTk5N2Y1Y2YtNmE5Yi00ZjAxLWJiY2MtZGY5YTE0MGQ1NDJiXC9kZ2JjcGo1LWFhODc4OWQ5LTkzM2UtNDIzMi05N2NmLTFhNmI4YzYzOGI2My5wbmciLCJ3aWR0aCI6Ijw9NzEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aGhArh1zg1qBvVXGWxWZdMqyhpq3Zz-2hcbSqWN_b24" alt="Garchomp"/>
          </Pokemonbutton>
        </div>
        <div className="img7-container">
          <h3>Arceus</h3>
          <Pokemonbutton pokemonId={7}>
            <img src="https://th.bing.com/th/id/OIP.Y3ZusXYnQvUQg3rtZZRLrwHaHa?rs=1&pid=ImgDetMain" alt="Arceus"/>
          </Pokemonbutton>
        </div>
        <div className="img8-container">
          <h3>Dragonite</h3>
          <Pokemonbutton pokemonId={8}>
            <img src="https://th.bing.com/th/id/OIP.YdD9KWzHNrsmKtSt7IRwdAAAAA?rs=1&pid=ImgDetMain" alt="Dragonite"/>
          </Pokemonbutton>
        </div>
      </div>
    </div>
  );
};

export default Images;
