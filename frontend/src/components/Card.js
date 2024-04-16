import React, {useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Spinner from './Spinner';
export default function Card() {

    const callSummarizer = async function(){
        setIsProcessing(true);
        await axios.get(`http://localhost:5000/summarize?text=${textEntered}`)
        .then((res) => {
            setSummary(res.data.summary);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const [textEntered, setTextEntered] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [summary, setSummary ] = useState("");
    const handleTextChange = function(e){
        setTextEntered(e.target.value);
    }
    return (
            <div class="shadow-lg rounded" style={{ 'margin': '2%'}}>
                <div class="row">
                    <div class="col-lg-5">
                        <h4 style={{'marginBottom' : '4%'}}>Your text here:</h4>
                        <textarea value={textEntered} onChange={handleTextChange} name="message" style={{ 'width': '100%', 'height' : '70vh', 'backgroundColor' : '#fafafa', 'padding' : '3%', 'borderRadius' : '10px', 'boxShadow' : '4px 4px #888888'}} placeholder='A 44-year-old man shot dead a Delhi Police ASI and another man, before sitting in an auto and killing himself on Northeast Delhi’s Meet Nagar Flyover, officials said. After sitting in the vehicle............'>
                        </textarea>
                    </div>
                    <div class="col-lg-2" style={{'height' : '70vh', 'paddingTop' : '22%'}}>
                    <Button variant="contained" style={{'width' : '100%', 'verticalAlign' : 'middle', 'fontFamily' : 'Lexend', 'display' : (isProcessing ? 'none' : '')}} onClick={callSummarizer}>Generate Summary</Button>
                    <Spinner isProcessing = {isProcessing}/>
                    </div>
                    <div class="col-lg-5">
                        <h4 style={{'marginBottom' : '4%'}}>Summary:</h4>
                        <div name="message" style={{ 'width': '100%', 'height' : '70vh', 'backgroundColor' : '#fafafa', 'padding' : '3%', 'borderRadius' : '10px', 'boxShadow' : '4px 4px #888888'}}>
                            {summary}
                        </div>
                    </div>
                </div>
            </div>
    );
}