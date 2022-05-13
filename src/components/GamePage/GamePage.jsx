import React, {useEffect, useState} from 'react';
import cl from './gamePage.module.css'
import axios from "axios";
import {mock} from "../../service/data";
import Spinner from "./Spinner/Spinner";
import RenderWords from "./RenderWords";
import RenderHeading from "./RenderHeading";
import LogOut from "../LogOut/LogOut";

const GamePage = ({nickName,calculateResult,...props}) => {
    const [category, setCategory] = useState([
        'Animals',
        'Colors',
        'Vehicles'
    ])

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [topic, setTopic] = useState([])
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [wrongAnswers, setWrongAnswers] =useState(0);
    const [goodAnswers, setGoodAnswers] =useState([]);
    const [markedWords, setMarkedWords] = useState([])

    useEffect( ()=>{
       setGoodAnswers(topic.good_words);
    },[topic])

    const handleClick = async (e) => {
            setLoading(true)
            setCategory([]);
            setTimeout( async() => {
                try {
                    const response = await axios.get('/data');
                    const data = await response.data.data;
                    const selectedCategory = await data.find((topics) => {
                        return topics.topic === e.target.outerText
                    })
                    setTopic(selectedCategory);
                    setLoading(false);
                }catch (e) {
                    setLoading(false)
                    setError(true);
                }
            }, 1000)
    }

    const handleSelect = (e) =>{
            const selectedWord = e.target.outerText
            if(markedWords.find((word)=>selectedWord===word)){
                return
            }
            setMarkedWords((prev)=>[...prev, selectedWord])
            if (
                goodAnswers.find((word)=>{
                    return word===selectedWord
                })
            ){
                setCorrectAnswersCount((prev)=> prev+1)
                const remainingCorrectAnswers = goodAnswers.filter((word)=> word !== selectedWord);
                setGoodAnswers(remainingCorrectAnswers);

            } else {
                setWrongAnswers((prev)=>prev+1);
            }
    }

    const handleSubmit = ()=>{
        calculateResult(correctAnswersCount, wrongAnswers, goodAnswers.length);
        props.history.push('/results');
    }


    return (
        <section className={cl.game}>
            <LogOut/>
            {!topic.list && RenderHeading(nickName, category, handleClick)}
            {loading && Spinner()}
            {topic.list && RenderWords(topic, handleSelect, handleSubmit)}
            {error && <p>Oops, looks something went wrong, please refresh the page.</p>}
        </section>
    );
};

export default GamePage;
