const userData=[
  {
    name: "Captian",
    city: "America",
    description: "Front-end developer",
    skills: ["UI / UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: true,
    profile: "images/img1.jpg"
  },
  {
    name: "Spider",
    city: "Newyork",
    description: "Front-end developer",
    skills: ["UI / UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: false,
    profile: "images/img2.jpg"
  },
  {
    name: "Devil",
    city: "America",
    description: "Front-end developer",
    skills: ["UI / UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: true,
    profile: "images/img3.jpg"
  },
];
function User(props){
  return(
    <div className="card-container">
      <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"} </span>
      <img src={props.profile} alt="img1" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );

};
export const UserCard = () => {
  return (
    <>
      {userData.map((user,index)=>(
      <User key={index} 
      name={user.name}
      city={user.city}
      description={user.description}
      skills={user.skills}
      profile={user.profile}
      online={user.online}
       />
    ))};
    </>
    
  );
};

{/* <div> <User name="Captian" city="America"
      description="Front-end Developer" skills={["UI/UX","Front end developer","HTML",
      "CSS","JS","React","Node JS"]} online={true} profile={"images/img1.jpg"} /> 
    </div> */}