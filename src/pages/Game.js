import React from 'react'
import flèche_down_header from '../assets/logos/Logo/flèche_down_header.png';
import Batgame_2 from '../assets/Illustrations_game/Batgame_2.png';
import Batgame_3 from '../assets/Illustrations_game/Batgame_3.png';
import '../styles/Game.scss';

function Game() {
  return (
    <>
     <main>
    <section id="hero_game">
        <div class="container">
          <div class="content">
           
            <h2 class="titre"> Let's play a<br/> Little Game</h2>
             
          </div>
          <img
            class="fleche"
            src={flèche_down_header}
            alt="image"
          />
        </div>
      </section>

        {/* demarrer la partie quiz  */}

       <section>
        <div class="container">
            <div class="wrapped">
                <div class="btn-game" id="entete">
                  <div class="chevalier">
                    <h2>Connaissez vous bien le chevalier noir?</h2>
                    <img with="100%"src={Batgame_2} alt=""/>
                  </div>
                  <button id="demarrer">Demarrer le quizz</button>
                </div>
        
                <div class="questions" id="questions">
                  <h2 class="nombredequestions">
                    <span id="current-question">1</span>/ <span id="total">15</span>
                  </h2>
                  <div class="card-quizz">
                    <div class="card-image">
                      <img src={Batgame_3} alt=""/>
                    </div>
                    <div class="card-body-quizz">
                      <div class="question-quizz">
                        Quel est l'autre nom de l'homme mystère?
                      </div>
                      <div class="choisirreponse">
                        <div class="qcm">
                          <input type="checkbox" name="quizz0"/>
                          <label for="">Le Sphinx</label>
                        </div>
                        <div class="qcm">
                          <input type="checkbox" name="quizz0"/>
                          <label for="">Saphir</label>
                        </div>
                        <div class="qcm">
                          <input type="checkbox" name="quizz0"/>
                          <label for="">Le joker</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                 {/* bouton question suivant  */}
                <div class="btn-game">
                  <button id="question-suivante">QUESTION SUIVANTE</button>
                </div>
              </div>

        </div>
       </section>

</main>

    </>
  )
}

export default Game