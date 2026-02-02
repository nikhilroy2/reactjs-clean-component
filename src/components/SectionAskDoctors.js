import React, { useState } from 'react';
// import { FaThumbsUp, FaBriefcase } from 'react-icons/fa';
import './SectionAskDoctors.css';
import Img1 from '../assets/images/ask_doctor/f1_bep9vx.jpg';
import Img2 from '../assets/images/ask_doctor/m3_akbcum.jpg';
import Img3 from '../assets/images/ask_doctor/f2_ov9wma.jpg';
import Img4 from '../assets/images/ask_doctor/m1_qihg3z.jpg';
import Img5 from '../assets/images/ask_doctor/m2_ovd31s.jpg';
import Img6 from '../assets/images/ask_doctor/f3_qhwcqe.jpg';

const doctorsData = [
    {
        id: 1,
        name: 'dr. Jena Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: Img1
    },
    {
        id: 2,
        name: 'dr. John Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: Img2
    },
    {
        id: 3,
        name: 'dr. Jihan Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: Img3
    },
    {
        id: 4,
        name: 'dr. James Doe',
        specialty: 'Pediatric Surgeon',
        rating: '95%',
        experience: '4 Years',
        category: 'Pediatric',
        image: Img4
    },
    {
        id: 5,
        name: 'dr. Ortho Smith',
        specialty: 'Orthopedic Surgeon',
        rating: '98%',
        experience: '10 Years',
        category: 'Orthopedic',
        image: Img5
    },
    {
        id: 6,
        name: 'dr. Bone Setter',
        specialty: 'Orthopedic Specialist',
        rating: '92%',
        experience: '6 Years',
        category: 'Orthopedic',
        image: Img6
    },
    {
        id: 7,
        name: 'dr. Ortho Smith',
        specialty: 'Orthopedic Surgeon',
        rating: '98%',
        experience: '10 Years',
        category: 'Orthopedic',
        image: 'https://i.pravatar.cc/150?img=60'
    },
    {
        id: 8,
        name: 'dr. Bone Setter',
        specialty: 'Orthopedic Specialist',
        rating: '92%',
        experience: '6 Years',
        category: 'Orthopedic',
        image: 'https://i.pravatar.cc/150?img=59'
    },
    {
        id: 9,
        name: 'dr. Nutri Green',
        specialty: 'Clinical Nutritionist',
        rating: '99%',
        experience: '8 Years',
        category: 'Nutritionist',
        image: 'https://i.pravatar.cc/150?img=40'
    },
    {
        id: 10,
        name: 'dr. Healthy Food',
        specialty: 'Dietitian',
        rating: '94%',
        experience: '5 Years',
        category: 'Nutritionist',
        image: 'https://i.pravatar.cc/150?img=32'
    },
    {
        id: 11,
        name: 'dr. Sleep Well',
        specialty: 'Anaesthesiologist',
        rating: '97%',
        experience: '12 Years',
        category: 'Anaesthetic',
        image: 'https://i.pravatar.cc/150?img=12'
    },
    {
        id: 12,
        name: 'dr. Numb Feel',
        specialty: 'Anaesthetic Specialist',
        rating: '90%',
        experience: '3 Years',
        category: 'Anaesthetic',
        image: 'https://i.pravatar.cc/150?img=8'
    },
    {
        id: 17,
        name: 'dr. Veggie Lover',
        specialty: 'Dietitian',
        rating: '98%',
        experience: '6 Years',
        category: 'Nutritionist',
        image: 'https://i.pravatar.cc/150?img=35'
    },
    {
        id: 18,
        name: 'dr. Fruit Expert',
        specialty: 'Clinical Nutritionist',
        rating: '96%',
        experience: '7 Years',
        category: 'Nutritionist',
        image: 'https://i.pravatar.cc/150?img=36'
    },
    {
        id: 21,
        name: 'dr. Deep Sleep',
        specialty: 'Anaesthesiologist',
        rating: '98%',
        experience: '11 Years',
        category: 'Anaesthetic',
        image: 'https://i.pravatar.cc/150?img=15'
    },
    {
        id: 22,
        name: 'dr. Pain Free',
        specialty: 'Anaesthetic Specialist',
        rating: '95%',
        experience: '6 Years',
        category: 'Anaesthetic',
        image: 'https://i.pravatar.cc/150?img=16'
    }
];

const categories = ['All', 'Orthopedic', 'Nutritionist', 'Pediatric', 'Anaesthetic'];

export default function SectionAskDoctors() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredDoctors = activeCategory === 'All'
        ? doctorsData.slice(0, 6)
        : doctorsData.filter(doc => doc.category === activeCategory);

    return (
        <section id="section_ask_doctors">
            <div className="ask_doctors_wrapper">

                {/* Left Sidebar */}
                <div className="ask_sidebar">
                    <h4 className="section_title">
                        <span>Ask <br /> Doctors </span>
                        <span>Ask Doctors </span>
                    </h4>
                    <div className="filter_menu">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter_btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Grid */}
                <div className="doctors_grid">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="doctor_card">
                            <div className="card_header">
                                <img src={doctor.image} alt={doctor.name} className="doctor_img" />
                                <div className="doctor_info">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.specialty}</p>
                                </div>
                            </div>
                            <div className="card_divider"></div>
                            <div className="card_footer">
                                <div className="doctor_stats">
                                    <span className="stat_item">
                                        <i className="ion-ios-thumbs-up stat_icon" style={{ fontSize: '24px' }}></i> {doctor.rating}
                                    </span>
                                    <span className="stat_item">
                                        <i className="ion-ios-briefcase stat_icon" style={{ fontSize: '24px' }}></i> {doctor.experience}
                                    </span>
                                </div>
                                <button className="chat_btn">CHAT</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
