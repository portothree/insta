import React, { Component } from 'react';

import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
        <section id="post-list">
            <article>
                <header>
                    <div className="user-info">
                        <span>Autor do post</span>
                        <span className="place">Local</span>
                    </div>

                    <img src={more} alt="Mais" />
                </header>

                <img src='http://localhost:3333/files/example.jpg' alt="" />

                <footer>
                    <div className="actions">
                        <button>
                            <img src={like} alt="" />
                        </button>

                        <img src={comment} alt="" />
                        <img src={send} alt="" />
                    </div>

                    <strong>500 Curtidas</strong>

                    <p>
                        Descrição
                        <span>#iLikeIt</span>
                    </p>
                </footer>

            </article>

        </section>
    );
  }
}

export default Feed;