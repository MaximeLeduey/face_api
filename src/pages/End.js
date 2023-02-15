import React from "react";
import { Link } from "react-router-dom";


function End() {
    return (
        <main class="site-content">
        <h1>Bilan de la session</h1>
        <p class="session-results-overview text-center">Sur l'ensemble des extraits, voici les émotions que l'AI a
            détecté :<br/>
            &#128552; : 8'25" / &#128533; : 4'48" / &#128512; : 2'12"
        </p>
        <div class="session-results mb">
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>
            <div class="result-item">
                <h2 class="movie">Alien, le huitième passager</h2>
                <ol class="data-resume">
                    <li>
                        <span>&#128552; :</span>
                        <progress id="file" max="100" value="70"> 70% </progress>
                    </li>
                    <li>
                        <span>&#128533; :</span>
                        <progress id="file" max="100" value="30"> 30% </progress>
                    </li>
                    <li>
                        <span>&#128512; :</span>
                        <progress id="file" max="100" value="10"> 10% </progress>
                    </li>
                </ol>
            </div>

        </div>
        <p class="text-center">
            <Link to='/data' class="btn">Voir les données consolidées</Link>
        </p>
    </main>
    )
}

export default End;