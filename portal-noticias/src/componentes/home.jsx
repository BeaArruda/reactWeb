
import '../componentes/home.css'
 
function Home(){
  const noticias = [
    {
      id: 1,
      imagem: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/12/bigstock-Omni-Channel-Technology-Of-Onl-336037885.jpg",
      titulo: "Nova IA revoluciona o mercado",
      descricao: "Uma nova tecnologia promete mudar a forma como usamos inteligência artificial."
    },
    {
      id: 2,
      imagem: "https://th.bing.com/th/id/R.7aaf05f311165380b7662a24975882d0?rik=FUU9FklTSQs7EQ&pid=ImgRaw&r=0",
      titulo: "React domina o mercado",
      descricao: "React continua sendo uma das bibliotecas mais usadas do mundo."
    },
    {
      id: 3,
      imagem: "https://th.bing.com/th/id/R.e0b2db7310dee3a10c2ba2000319b79d?rik=ajqSgQ0b9A%2flug&riu=http%3a%2f%2fwww.meupositivo.com.br%2fdoseujeito%2fwp-content%2fuploads%2f2022%2f09%2fDia-da-Informatica-relembre-a-evolucao-de-tecnologias-em-76-anos.jpg&ehk=%2bb9QRLn71yz867DIrBkWU2i%2bQsOWjOlLJIrnQmYJ1Pw%3d&risl=&pid=ImgRaw&r=0",
      titulo: "Segurança digital em alta",
      descricao: "Ataques cibernéticos aumentam e exigem mais proteção."
    }
];

    return(
        <>

        <div className='container'>

          <div className='cards'>
          {noticias.map((noticia) => (
            <div className='card'>
                <h1>{noticia.id}</h1>
                <img src={noticia.imagem}/>
                <h2>{noticia.titulo}</h2>
                <h4>{noticia.descricao}</h4>
            </div>
          ))}
          </div>

        </div>
        
        </>
    )
 
}
export default Home