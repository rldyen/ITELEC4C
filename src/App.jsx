import './App.css'
import FBLogo from './assets/facebook.svg'
import GitHubLogo from './assets/github.svg'
import LinkedInLogo from './assets/linkedin.svg'
import ProfilePic from './assets/gradpic.png'

function App() {
  return (
    <div className="App">
      <div className="container-header">
        <section>
          <h1 className="red-text">Hi! I am Roald Yen Soriano</h1>
          <p className="header-subtitle orange-text"><strong>Front-End Developer and UI/UX Designer</strong></p>
          <p className="header-body">Designing and creating appealing interfaces for both Web and Mobile Applications.</p>
        </section>
        
        <section className="header-social">
          <a href="https://www.facebook.com/rowyourbowt/" target="_blank" rel="noreferrer"><img src={FBLogo} alt="Facebook Logo" /></a>
          <a href="https://www.linkedin.com/in/roaldyen/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
          <a href="https://github.com/rldyen" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo" /> </a>
        </section>

        <section className="header-photo">
          <img className="" src={ProfilePic} alt="graduation picture" />
        </section>
      </div>

      <div className="container-bionote">
        <h2 className="red-text">Bionote</h2>
        <p className="bionote-text">Roald Yen G. Soriano is a highly motivated and dedicated individual who has a deep-seated passion for Web and Mobile Application Development. Currently residing in Valenzuela City, he is in his final year as a Bachelor of Science in Information Technology student at the University of Santo Tomas. His specialization in this field is a testament to his technical skills and his commitment to pursuing a career in Web and Mobile Development. Throughout his time at university, Roald has consistently demonstrated a strong aptitude for problem-solving, creative design, and developing innovative solutions. He has applied these skills to several school projects, contributing significantly to their success.</p>
        <p className="bionote-text">Roald&apos;s passion for technology and his experience and dedication have earned him an internship at Symph, where he works on UI/UX Design projects. Here, he is able to further develop his skills and refine his understanding of this field. His ability to think critically, communicate effectively, and work collaboratively make him a valuable asset to any team and project. With his passion, dedication, and experience, Roald is poised to make a significant impact in the world of Web and Mobile Application Development.</p>
      </div>

      <div className="container-cv">
        <p className="cv-title red-text">Curriculum Vitae</p>
        <section className="cv-content">
          <h2 className="orange-text">Work Experience</h2>
          <table>
            <tr>
              <td>2023 Jan - present</td>
              <td>
                <strong>UI/UX Design Intern (WFH)</strong>
                <br /><em><a href="https://www.symph.co/" target="_blank" rel="noreferrer">Symph Inc.</a></em>
                <br />Will be working with the Symph design team as a UI/UX Designer to work on web and mobile applications or on Symph&apos;s own products.
              </td>
            </tr>

            <tr>
              <td>2021 Jul - 2021 Sep</td>
              <td>
                <strong>Part Time Illustrator (WFH)</strong>
                <br /><em><a href="https://en.sprayart-xin.com/mikkelart" target="_blank" rel="noreferrer">SPRAY ART EXN Co., Ltd.</a></em>
                <br />Participated in a project of a venture company from Shizuoka University in Japan.
                <br />Draw variety of art for nursing homes, hospitals, and childcare facilities.
              </td>
            </tr>
          </table>
        </section>

        <section className="cv-content">
          <h2 className="orange-text">Education</h2>
          <table>
            <tr>
              <td>2019 - 2023</td>
              <td>
                <strong>BS in Information Technology</strong>
                <br /><em><a href="https://www.ust.edu.ph/information-and-computing-sciences/" target="_blank" rel="noreferrer">University of Santo Tomas - College of Information and Computing Sciences</a></em>
                <br />Specialization of Web and Mobile App Development
              </td>
            </tr>

            <tr>
              <td>2017 - 2019</td>
              <td>
                <strong>Senior High School</strong>
                <br /><em><a href="https://www.ust.edu.ph/senior-high-school/" target="_blank" rel="noreferrer">University of Santo Tomas - Senior High School</a></em>
                <br />Science, Technology, Engineering, and Mathematics Strand
              </td>
            </tr>

            <tr>
              <td>2013 - 2017</td>
              <td>
                <strong>Junior High School</strong>
                <br /><em><a href="https://www.mav.edu.ph/" target="_blank" rel="noreferrer">Montessori Academy of Valenzuela</a></em>
              </td>
            </tr>
          </table>

        </section>
        <section className="cv-content">
          <h2 className="orange-text">Certifications</h2>
          <table>
            <tr>
              <td>2022 Nov</td>
              <td>
                <a href="https://www.philnits.org/passers_IP2018.html" target="_blank" rel="noreferrer"><strong>PhilNITS Level 1 Information Technology Passport Examination (IP) Passer</strong></a>
                <br /><em>Philippine National IT Standards (PhilNITS) Foundation</em>
              </td>
            </tr>
          </table>
        </section>

        <section className="cv-content">
          <h2 className="orange-text">Awards</h2>
          <table>
            <tr>
              <td></td>
              <td>
                <strong>Dean&apos;s Lister</strong>
                <br /><em>University of Santo Tomas - College of Information and Computing Sciences</em>
                <br />A.Y. 2021-2022, 1st Term & 2nd Term
                <br />A.Y. 2020-2021, 1st Term & 2nd Term
                <br />A.Y. 2019-2020, 1st Term & 2nd Term
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td>
                <strong>Poster Presenter at the 2nd Senior High School Capstone Experience Conference at University of the Philippines Los Baños</strong>
                <br /><em>University of Santo Tomas - Senior High School</em>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <strong>Academic Silver Medalist Award</strong>
                <br /><em>Montessori Academy of Valenzuela</em>
                <br />A.Y. 2016-2017
                <br />A.Y. 2015-2016
              </td>
            </tr>
          </table>
        </section>

        <section className="cv-content">
        <h2 className="orange-text">Projects</h2>
          <table>
            <tr>
              <td>2022 Jul - 2022 Dec</td>
              <td>
                <strong>UST Hospital Portal: Web-based Application for Clinical and Laboratory Result Viewing</strong>
                <br /><em><a href="https://usth.vercel.app/" target="_blank" rel="noreferrer">https://usth.vercel.app/</a></em>
                <br />Project for the courses IT Capstone Project I & IT Capstone Project II
                <br />Worked as the Project Manager, on the UI/UX Design and Front-End of the project
              </td>
            </tr>

            <tr>
              <td>2022 Sep - 2022 Oct</td>
              <td>
                <strong>Back-End Web Development 101 Final Project</strong>
                <br /><em><a href="https://github.com/rldyen/backend-101-beginners-finalproject/" target="_blank" rel="noreferrer">https://github.com/rldyen/backend-101-beginners-finalproject/</a></em>
                <br />Project for Bayan Academy Online Training on Back-End Web Development 101
                <br />Technologies used: MongoDB, ExpressJS, NodeJS, Tailwind CSS
                <br />Basic routing and CRUD functionality
              </td>
            </tr>

            <tr>
              <td>2021 Aug - 2022 May</td>
              <td>
                <strong>Web-based Appointment System for ASEA iWork Builders Co.</strong>
                <br /><em><a href="https://asea-iwork-builders-co.vercel.app/home" target="_blank" rel="noreferrer">https://asea-iwork-builders-co.vercel.app/home</a></em>
                <br />Project for the courses Software Engineering I & Software Engineering II
                <br />Technologies used: ReactJS, NodeJS, Firebase
                <br />Worked on the UI/UX Design and Front-End of the project
              </td>
            </tr>

          </table>
        </section>

        <section className="cv-content">
        <h2 className="orange-text">Trainings</h2>
          <table>
            <tr>
              <td>2022 Sep - 2022 Oct</td>
              <td>
                <strong>Online Training on Back-End Web Development 101</strong>
                <br /><em><a href="https://www.facebook.com/bayanacademyorg/photos/a.615980728497906/5290936864335579" target="_blank" rel="noreferrer">BPI Tech Voc in collaboration with Bayan Academy</a></em>
                <br />This training is part of Bayan Academy&apos;s One Plan for Labor Alignment and Networking or OPLAN Trabaho campaign created to address the needs of unemployed and outplaced workers brought about by Covid-19.
              </td>
            </tr>
            </table>
        </section>
      </div>

    </div>
  )
}

export default App
