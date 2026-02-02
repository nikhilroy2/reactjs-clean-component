import Img1 from "../assets/images/facilities/clinic2_bbmrbf.jpg";
import Img2 from "../assets/images/facilities/clinic5_kv83cj.jpg";
import Img3 from "../assets/images/facilities/clinic4_lmtil0.jpg";
import Img4 from "../assets/images/facilities/clinic3_mrsrew.jpg";
import LibraryIcon from '../assets/icons/library_icon_w.svg';
import './SectionFacilities.css';

export default function SectionFacilities() {
    const facilities = [
        {
            id: 1,
            title: 'Lorem Ipsum',
            description: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
            image: Img1,
            link: "/"
        },
        {
            id: 2,
            title: 'Etiam rhoncus',
            description: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
            image: Img2,
            link: "/"
        },
        {
            id: 3,
            title: 'Duis fermentum',
            description: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
            image: Img3,
            link: "/"
        },
        {
            id: 4,
            title: 'Lorem Ipsum',
            description: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
            image: Img4,
            link: "/"
        }
    ];

    return (
        <section id='section_facilities'>
            <div className="facilities_container">
                <div className="title_section">
                    <div className="icon_deco">
                        <img src={LibraryIcon} className="library_icon" alt="icon" />
                    </div>
                    <h3>Our Facilities</h3>
                </div>

                <div className="facilities_grid">
                    {facilities.map((value, index) => {
                        return (
                            <div className="facility_card_wrapper" key={index}>
                                <div className="slide_card">
                                    <img src={value.image} alt={value.title} />
                                    <div className="card_content">
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                        <a href={value.link} className="detail_btn">SEE DETAIL</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
