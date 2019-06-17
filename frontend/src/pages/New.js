import React, { Component } from 'react';

class New extends Component {
  render() {
    return (
        <form id="new-post">
            <input type="file" />

            <input 
            type="text"
            name="author"
            placeholder="Autor"
          />

          <input 
            type="text"
            name="place"
            placeholder="Local"
          />

          <input 
            type="text"
            name="description"
            placeholder="Descrição"
          />

          <input 
            type="text"
            name="hashtags"
            placeholder="Hashtags"
          />

          <button type="submit">Enviar</button>
        </form>
    );
  }
}

export default New;