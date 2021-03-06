import Data from './Data';
import Title from './Main_Title';
import Footer from './Footer.js';
import Header from './Header.js';

function Home() {
  return (
    <div>
      <header className="App-header">
      <svg className="absolute w-60 h-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FA4D56" d="M61.8,-17.7C69.9,5,59.4,36.1,38.5,50.7C17.6,65.4,-13.6,63.5,-36.6,47.5C-59.7,31.4,-74.6,1.2,-67.1,-20.5C-59.6,-42.2,-29.8,-55.4,-1.5,-54.9C26.8,-54.4,53.7,-40.3,61.8,-17.7Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute w-60 h-60 top-1 bottom-1 right-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F1C21B" d="M43,-52.8C57.8,-38.8,73.5,-27.2,75.5,-13.6C77.6,0,66,15.7,54.7,28.2C43.5,40.7,32.5,49.9,17.7,60.4C3,70.8,-15.6,82.3,-29.3,78.3C-42.9,74.2,-51.7,54.6,-60.3,36.4C-69,18.2,-77.6,1.5,-77.8,-16.6C-78.1,-34.8,-70.1,-54.4,-55.8,-68.5C-41.4,-82.7,-20.7,-91.3,-3.3,-87.4C14.1,-83.4,28.1,-66.9,43,-52.8Z" transform="translate(100 100)" />
          </svg>
        <div className="App z-40 flex flex-col justify-center w-full md:h-auto">
        <Header />
        <Title />
        <Data />
        <Footer />
        </div>
        <svg className="absolute w-32 h-32 bottom-1 right-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#E8DAFF" d="M36.9,-61.5C50.1,-56.2,64.8,-51,73.9,-40.8C83,-30.6,86.6,-15.3,82.3,-2.5C78,10.4,65.9,20.7,58,33C50.1,45.4,46.4,59.7,37.4,69.1C28.5,78.5,14.2,83,1.3,80.6C-11.6,78.3,-23.1,69.2,-31.4,59.4C-39.7,49.6,-44.6,39.1,-52,29.1C-59.3,19.1,-69,9.5,-71.8,-1.6C-74.6,-12.8,-70.6,-25.6,-63.1,-35.3C-55.5,-45,-44.5,-51.5,-33.5,-58.1C-22.4,-64.6,-11.2,-71.1,0.3,-71.6C11.8,-72.2,23.6,-66.8,36.9,-61.5Z" transform="translate(100 100)" />
          </svg>
      <svg className="absolute w-32 h-32 bottom-8 left-8 animate-bounce" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#08BDBA" d="M15.1,-20.6C22.8,-21.7,34.6,-24.2,37.7,-21.1C40.8,-17.9,35.1,-8.9,39.8,2.7C44.5,14.4,59.6,28.7,62.3,42C65.1,55.3,55.5,67.5,43.1,66.8C30.7,66.1,15.3,52.5,3.2,46.9C-8.9,41.3,-17.8,43.7,-19.8,38.4C-21.7,33.1,-16.8,20,-23.6,12.3C-30.5,4.6,-49.1,2.3,-57.2,-4.7C-65.3,-11.6,-62.8,-23.2,-56.6,-32C-50.3,-40.7,-40.3,-46.6,-30.2,-44.1C-20.2,-41.7,-10.1,-31,-3.2,-25.4C3.7,-19.8,7.4,-19.5,15.1,-20.6Z" transform="translate(100 100)" />
            </svg>
      </header>
    </div>
  );
}


export default Home;
