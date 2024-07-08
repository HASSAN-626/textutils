import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark Mode');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Enable Light Mode');
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum
          eius officia doloribus? Officiis voluptate tempora aliquid reiciendis,
          debitis, id amet a neque nihil, dignissimos et ex obcaecati porro
          deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam
          suscipit ex cumque eveniet, distinctio exercitationem dolorem quaerat
          eum ad beatae! Saepe reprehenderit, exercitationem recusandae
          inventore molestiae dolorum cum dolorem!
        </p>
        <button onClick={toggleStyle} className="btn btn-primary bg-red-500"  >
          {btnText}
        </button>
      </div>
    </>
  );
}
