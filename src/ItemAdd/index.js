import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import './index.css'; 

class AddBlog extends Component{
    state = {
        selectedName: '',
        image: "",
        author: "",
        authorImage: "",
        description: "",
    }

    handleNameChange = event => {
        this.setState({ selectedName: event.target.value });
    }

    handleImageChange = event => {
        const picFile = event.target.files[0];
        const techUrl = URL.createObjectURL(picFile);
        this.setState({ image: techUrl });
    }

    handleAuthorChange = event => {
        this.setState({ author: event.target.value });
    }

    handleAuthorImageChange = event => {
        const authorPicFile = event.target.files[0];
        const authorUrl = URL.createObjectURL(authorPicFile);
        this.setState({ authorImage: authorUrl });
    }

    handleDescriptionChange = event => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { selectedName, image, author, authorImage, description } = this.state 
    const userDetails = {
        "id":uuidv4(),
        "techTitle":selectedName, 
        "techFile":image, 
        "techAuthor":author, 
        "authorFile":authorImage, 
        "techDescription":description
    }
    const url = "http://localhost:4000/blogsData"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 201) {
      console.log("posted successfully")
    }
    }

    render() {
        const { selectedName, author, description } = this.state;
    return (
        <form className="form-container" onSubmit={this.handleSubmit}>
            <div className='setBlogsEl'>
            <div>
            <label htmlFor="name-dropdown">Select Tech Name:</label>
            <select className='topDist' id="name-dropdown" value={selectedName} onChange={this.handleNameChange}>
                <option value="Select Technology">Select Technology</option>
                <option value="Full Stack">Frontend Developement</option>
                <option value="Backend Developement">Backend Developement</option>
                <option value="Database">Database</option>
                <option value="Python Development">Python Development</option>
                <option value="Automation Testing">Automation Testing</option>
                <option value="Cyber Security">Cyber Security</option>
            </select>

            <br />
            <label htmlFor="image-upload">Upload Technology Image:</label>
            <br />
            <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={this.handleImageChange}
                className='topDist'
            />

            <br />
            <label htmlFor="author">Author Name:</label>
            <br />
            <input
                type="text"
                id="author"
                value={author}
                onChange={this.handleAuthorChange}
                className='topDist'
            />
            
            <br />
            <label htmlFor="author-image-upload">Upload Author Image:</label>
            <br />
            <input
                type="file"
                id="author-image-upload"
                accept="image/*"
                onChange={this.handleAuthorImageChange}
                className='topDist'
            />

            <br />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={this.handleDescriptionChange}
            />
            </div>

            <div>
                <div>
                    <h1> Working </h1>
                </div>
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
};

export default AddBlog;
