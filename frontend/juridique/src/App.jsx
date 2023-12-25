import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faLocationDot } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (
    <>
      <div className='flex flex-col w-screen min-h-screen'>
      <NavBar></NavBar>

      <div className='bg-cover bg-center w-screen min-h-96 ' style={{ backgroundImage: `url('./elements/bgimg.svg')`, height: '100%'}}>
          <div className='text-black w-2/5	mt-20 ml-16 flex flex-col gap-5'>
          <p className=' text-3xl	'>Navigating Legal Excellence in Algeria</p>
          
          <p
          className='text-2xl font-thin'>
            Your Trusted Advocates for Justice and Expertise
                
              </p>
          
          
          </div>
          <div className='flex gap-2 place-items-baseline ml-10 mt-20'>
      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg' >
      <FontAwesomeIcon className='text-orange-500' icon={faMagnifyingGlass} />
      <input
        className='ml-2 w-80 h-full bg-transparent outline-none'
        type="text"
        placeholder='Search for your lawyer'
      />
      </div>
     
      

      <div className='rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg'>
        <FontAwesomeIcon className='text-orange-500' icon={faLocationDot} />
        <input
          className='ml-2 w-80 h-full bg-transparent outline-none'
          type="text"
          placeholder='Search for location'
        />
      </div>

      <button className='rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 place-items-center'>
        Search
      </button>
    </div>
        </div>
        <div className='pl-60  pr-60 flex m-auto'> 
          <img src="./elements/jur.svg" alt="" />
        </div>
        <div className='text-left text-black p-10'>
          <p>
          La Constitution algérienne de 1996, révisée en février 2016, institue un pouvoir judiciaire indépendant. <br />
Elle consacre les principes fondamentaux d’égalité et de liberté. La garantie de ces droits fondamentaux est assurée par la Cour Suprême au sommet de l’ordre judiciaire.
Le système judiciaire algérien est régi selon un double degré de juridiction avec en première instance des tribunaux et en seconde instance des cours d’appel. Il dispose d’une dualité de juridictions avec un ordre judiciaire distinct de l’ordre administratif. <br />
<p className='text-orange-500'>ORDRE JUDICIAIRE</p>
<p className='text-orange-500'>COUR SUPRÊME</p>
Instituée par la loi n°63-218 du 18 juin 1963, la Cour Suprême représente la plus haute juridiction de l’ordre judiciaire. La Cour Suprême comprend 150 juges répartis dans quatre divisions : civil et commercial; sécurité sociale et travail; criminel; et administrative.
Son objectif est, d’une part, de garantir l’unification de la jurisprudence de l’ordre judiciaire sur l’ensemble du territoire national et d’autre part, de veiller au respect de la loi.
Elle est compétente pour statuer sur les pourvois en cassation formés contre les arrêts et jugements rendus en dernier ressort par les cours et tribunaux de tout ordre à l’exception des juridictions relevant de l’ordre administratif.
La Cour Suprême, actuellement régie par la loi de 1989, est composée de huit chambres (civile, foncière, sociale, criminelle, délits et contraventions, statut personnel, chambre commerciale et maritime et chambre des requêtes). Elle dispose d’une autonomie financière et d’une autonomie de gestion.
La Cour Suprême algérienne est composée de magistrats du siège et de magistrats du parquet. Les magistrats du siège sont le premier président (qui dirige la Cour Suprême), le vice-président, les présidents de chambres, les présidents de sections et les conseillers. Les magistrats du parquet sont composés du procureur général, du procureur général adjoint et des avocats généraux. Le greffe de la Cour Suprême est assuré par les greffiers. <br />
<p className='text-orange-500'>LA COUR D’APPEL</p>
La Cour d’appel est une juridiction de second degré. Elle constitue une voie d’appel contre les décisions de justice rendues par les tribunaux des juridictions inférieures. <br />
Il existe 48 cours d’appel sur le territoire national algérien. Chaque cour est divisée en plusieurs chambres lesquelles peuvent se subdiviser en sections. Chaque cour comprend, au moins, une chambre d’accusation qui constitue une juridiction d’instruction du second degré. Elle connaît les recours contre les ordonnances des juges d’instruction et contrôle les activités de la police judiciaire. <br />
La Cour d’appel statue en forme collégiale. Elle est composée d’un Président, d’un vice-président, des présidents de chambre, des conseillers, d’un parquet général comprenant un procureur général, un premier procureur général adjoint et des procureurs généraux adjoints, ainsi qu’un service du greffe.
<p className='text-orange-500'>TRIBUNAL</p>
On compte 210 tribunaux en Algérie. Le Tribunal est la juridiction de premier degré de l’ordre judiciaire. Sa compétence est déterminée par le code de procédure civile, le code de procédure pénale et les lois particulières en vigueur.
Le Tribunal est généralement divisé en quatre sections, civile, pénale, prud’homale et commerciale.
Juridiction statuant à juge unique, le Tribunal comprend un président du tribunal, un vice–président, des juges, un ou plusieurs juges d’instruction, un ou plusieurs juges des mineurs, un procureur de la République, des procureurs de la République adjoints et le greffe. La juridiction des mineurs et la juridiction sociale statuent en forme collégiale en présence d’un juge et de deux assesseurs.
<p className='text-orange-500'>PÔLES PÉNAUX SPÉCIALISÉS </p>
Les pôles pénaux spécialisés comprennent 6 tribunaux, créés en 2004, et représentent un nouvel instrument judiciaire mis en place pour adapter la législation algérienne aux différents engagements internationaux de l’Algérie tels que la lutte contre le crime international organisé, l’atteinte au système de traitement automatisé des données, le blanchiment d’argent, le terrorisme et les infractions relatives à la législation des changes.
Un décret exécutif a étendu la compétence territoriale des procureurs de la république, des juges d’instruction ainsi que des juges du siège au ressort d’autres tribunaux. A titre d’exemple, la compétence territoriale du tribunal de Ouargla comprend Ouargla, Adrar, Illizi, Tindouf et Ghardaïa. Ces juridictions comprennent des règles dérogatoires au droit commun et sont dotées d’importantes compétences, notamment techniques (écoutes téléphoniques, infiltrations sonorisation)
Un pôle comprend douze magistrats chargés de suivi des dossiers spéciaux. Il statue en dernier ressort, avec trois magistrats assistés de deux assesseurs-jurés.
 <p className='text-orange-500'>TRIBUNAL MILITAIRE  </p>
Le Tribunal militaire est une juridiction d’exception dont les jugements interviennent en dehors du système judiciaire ordinaire.
En temps de paix, cette juridiction a compétence pour juger certaines infractions propres aux armées et les personnes qui ont la qualité de militaire. Ces décisions relèvent du contrôle de la Cour Suprême. En temps de guerre, elles connaissent toutes les atteintes à la Sûreté de l’Etat.
Le Tribunal militaire permanent est composé de trois membres, un président et deux assesseurs. Cette juridiction est présidée par un magistrat des Cours.
 <p className='text-orange-500'>ORDRE ADMINISTRATIF  </p>
 <p className='text-orange-500'>CONSEIL D’ETAT </p>

Le Conseil d’Etat algérien est la juridiction suprême de l’ordre administratif institué par la loi n°98-01 du 30 mai 1998.
Il constitue l’organe régulateur de l’activité des juridictions administratives en réglant les conflits entre l’administration et les administrés.
En tant qu’organe consultatif, il donne son avis sur les projets de loi avant leur examen en conseil des ministres.
En tant qu’organe judiciaire, le Conseil d’Etat connaît en premier et en dernier ressort des recours en annulation formés contre les décisions réglementaires ou individuelles émanant des autorités administratives centrales, des institutions publiques nationales et des organisations professionnelles nationales, des recours en interprétation et des recours en appréciation de la légalité des actes dont le contentieux relève du Conseil d’Etat.
Il connaît en appel les jugements rendus en premier ressort par les juridictions administratives dans les cas où la loi n’en dispose pas autrement comme il connaît des recours en appel contre les décisions de juridictions administratives rendues en dernier ressort, ainsi que des recours en cassation des arrêts de la cour des comptes.
Le Conseil d’Etat est organisé pour l’exercice de ses fonctions judiciaires en quatre chambres, chacune d’elle étant subdivisée en sections.
 <p className='text-orange-500'>TRIBUNAL ADMINISTRATIF  </p>

Les tribunaux administratifs constituent les juridictions de droit commun en matière administrative.
Leurs décisions sont susceptibles d’appel devant le Conseil d’Etat puisqu’elles constituent des juridictions de première instance.
Les tribunaux administratifs sont organisés en chambres subdivisées en sections.
Chaque tribunal administratif comprend au moins trois magistrats. Les magistrats de ce tribunal sont soumis au statut de la magistrature. Ils sont organisés en chambres qui peuvent être subdivisées en sections.
 <p className='text-orange-500'>TRIBUNAL DES CONFLITS   </p>

Créé lors de la révision constitutionnelle intervenue en 1996, le Tribunal des conflits a été institué par l’article 152 de la constitution et mis en œuvre par la loi organique n° 98-03 du 3 juin 1998.
Il s’agit d’une juridiction chargée de régler les conflits de compétence entre les juridictions relevant de l’ordre judiciaire et celles relevant de l’ordre administratif. Le Tribunal des conflits n’intervient donc pas dans les conflits de compétence entre les juridictions relevant d’un même ordre.
Aucun appel ne peut être formé contre les décisions émanant de ce tribunal.
Le Tribunal des conflits comprend sept magistrats, dont le président, nommés pour moitié parmi les magistrats de la Cour Suprême et pour l’autre moitié parmi les magistrats du conseil d’Etat. Le président du Tribunal des conflits, quant à lui, est nommé, alternativement parmi les magistrats de la Cour suprême ou du Conseil d’Etat, par le Président de la République pour une période de trois ans. Un commissaire d’Etat et un commissaire d’État adjoint sont aussi nommés selon la même forme pour une durée de 3 ans.
Pour délibérer valablement le Tribunal des conflits doit comprendre au moins 5 membres dont 2 relevant de la Cour suprême et 2 relevant du Conseil d’Etat. Ses décisions sont prises à la majorité des voix. En cas de partage des voix, la loi du 3 juin 1998 a prévu un mécanisme particulier qui évite un blocage : la voix du président est prépondérante.
SOURCES
site officiel du ministère de la justice algérien <br />
 <a href="https://www.mjustice.dz/html/">https://www.mjustice.dz/html/  </a> <br />
<a href="http://legiglobe.rf2d.org/algerie/2016/09/27/">http://legiglobe.rf2d.org/algerie/2016/09/27/</a> <br />
<a href="https://www.lexadin.nl/wlg/courts/nofr/oeur/lxctalg.htm">https://www.lexadin.nl/wlg/courts/nofr/oeur/lxctalg.htm</a>  <br />
<a href="http://www.nyulawglobal.org/globalex/Algeria.html#_Supreme_Court
"> http://www.nyulawglobal.org/globalex/Algeria.html#_Supreme_Court
</a> <br />
          </p>
        </div>
        <Footer></Footer>
       </div>
    </>
  )
}

export default App
