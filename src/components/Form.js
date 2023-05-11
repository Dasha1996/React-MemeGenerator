import React, {useState, useEffect} from 'react';
import MemeImage from './MemeImage.js';

const Form = () => {
    const [meme, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: 'https://i.imgflip.com/1g8my4.jpg',
        imageTitle: "Two Buttons"
    })
    const [allImages, setAllImages] = useState([]);
    
    useEffect(() => {
        async function getMemes () {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllImages(data.data.memes);
        }
        getMemes()
        return () => {

        }
    }, [])
   
    console.log("images are" + allImages);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random()* allImages.length);
        const url = allImages[randomNumber].url;
        setMemes(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            imageTitle: allImages[randomNumber].name
        }))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setMemes(prevValue => ({
            ...prevValue,
            [name]:value
        }))
    }
  return (
    <main>
        <form className="form">
            <input
                type="text"
                placeholder="Top text"
                className="form--input"
                name = "topText"
                value = {meme.topText}
                onChange = {handleChange}
            >
            </input>
            <input
                type="text"
                className="form--input"
                placeholder="Bottom text"
                name="bottomText"
                value = {meme.bottomText}
                onChange = {handleChange}
            >
            </input>
        <button onClick={handleSubmit} className="form--button">Get a new meme image 🖼</button>
    </form>
    <div className = "meme">
        <MemeImage meme = {meme}></MemeImage>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>

    </div>
    </main>
  )
}

export default Form