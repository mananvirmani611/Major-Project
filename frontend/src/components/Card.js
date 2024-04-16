import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Card() {
    return (
            <div class="shadow-lg rounded" style={{ 'margin': '2%'}}>
                <div class="row">
                    <div class="col-lg-5">
                        <h4 style={{'marginBottom' : '4%'}}>Your text here:</h4>
                        <textarea name="message" style={{ 'width': '100%', 'height' : '70vh', 'backgroundColor' : '#fafafa', 'padding' : '2%', 'borderRadius' : '10px', 'boxShadow' : '4px 4px #888888'}} placeholder='Sample longg texttt'>
                        </textarea>
                    </div>
                    <div class="col-lg-2" style={{'height' : '70vh', 'paddingTop' : '22%'}}>
                    <Button variant="contained" style={{'width' : '100%', 'verticalAlign' : 'middle', 'fontFamily' : 'Lexend'}} >Generate</Button>

                    </div>
                    <div class="col-lg-5">
                        <h4 style={{'marginBottom' : '4%'}}>Summary:</h4>
                        <div name="message" style={{ 'width': '100%', 'height' : '70vh', 'backgroundColor' : '#fafafa', 'padding' : '2%', 'borderRadius' : '10px', 'boxShadow' : '4px 4px #888888'}} placeholder='Sample longg texttt'>
                        </div>
                    </div>
                </div>
            </div>
    );
}