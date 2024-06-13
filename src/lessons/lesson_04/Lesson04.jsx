import AnimalCard from '../../components/animalCard/AnimalCard'
import './style.css'
import {lionData, zebraData} from './data'
import Button from '../../components/button/Button';

function Lesson04() {
    console.log(lionData, zebraData);
    return (
        <div>
            <h1>Lesson 4</h1>
            <AnimalCard animalData={lionData}/>
            <AnimalCard animalData={zebraData}/>
            <Button buttonText={'first'} isGetButton={true}/>
            <Button buttonText={'second'} isSendButton={}/>
        </div>
    )
}

    export default Lesson04
