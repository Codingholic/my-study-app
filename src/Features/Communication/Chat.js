import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import image from "../assets/images (1).jpeg";
import "./Chat.css";
const Chat = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="Document_container">
                <div className="chat_container">
                    <div className="chat_people_container">
                        <div className="start_text_container">
                            <div className="text_and_new_message">
                                <h3 style={{ color: "white" }}>Chat</h3>
                                <div className="container_chat_start_icons">
                                    <BsPlusCircleDotted />
                                    <div style={{ marginLeft: "20px" }}>
                                        <HiDotsHorizontal />
                                    </div>
                                </div>
                            </div>
                            <div className="search_bar_chat">
                                <div className="search_bar">
                                    <input
                                        placeholder="search or start a new chat"
                                        className="search_bar_input"
                                        type="text"
                                    />
                                    <BsSearch />
                                </div>
                            </div>
                        </div>
                        <div className="groups_people_view">
                            <div
                                style={{ backgroundColor: "#565656" }}
                                className="card_people"
                            >
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                            <div className="card_people">
                                <div className="profile_picture">
                                    <img
                                        height={56}
                                        width={56}
                                        style={{ borderRadius: "50%" }}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="name_and_chat">
                                    <div className="name_people">
                                        <p>Anuncia</p>
                                    </div>
                                    <div className="highlight_chat_people">
                                        <p>This is me trying to survive</p>
                                    </div>
                                </div>
                                <div className="chat_time">
                                    <p>12:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat_text_container">
                        <div className="chat_head_top_container">
                            <div className="group_people_container">
                                <div className="group_image_or_people_container">
                                <img className="chat_image_profile_group_or_people_top_head" src={image} alt="/" />
                                </div>
                                <div className="contain_name_and_name_list_array">
                                    <div className="group_title_text_container">
                                        <h3>FY BAMC</h3>
                                    </div>
                                    <div className="group_title_text_container_array_names">
                                        <p>James, Robert, Michael, David, Richard, Joseph, Thomas, Christopher, Charles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_container">
                            <div className="messageBox_other">
                                <img className="chat_image_profile" src={image} alt="/" />
                                <div class="talk-bubble tri-right left-top">
                                    <div class="talktext">
                                        <h5 style={{ color: "#00edff" }}>Anuncia</h5>
                                        <p>This one adds a right triangle on the left,This one addThis one addsThis one adds a right triangle on the left a right triangle on the lefts a right triangle on the left flush at the top by using .tri-right and .left-top to specify the location.This one adds a right triangle on the left,This one addThis one addsThis one adds a right triangle on the left a right triangle on the lefts a right triangle on the left flush at the top by using .tri-right and .left-top to specify the location.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contain_my_chat">
                                <div className="messageBox_me">
                                    <img className="chat_image_profile" src={image} alt="/" />
                                    <div class="talk-bubble_me tri-left right-top">
                                        <div class="talktext">
                                            <h5 style={{ color: "#00edff" }}>Anuncia</h5>
                                            <p>This one adds a right triangle on the left,This one addThis one addsThis one adds a right triangle on the left a right triangle on the lefts a right triangle on the left flush at the top by using .tri-right and .left-top to specify the location.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat_second_container"></div>
            </div>
        </div>
    );
};

export default Chat;
