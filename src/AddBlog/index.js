import React, {Component} from 'react';
import './index.css'; // Import the CSS file for styling

const items = [
    {
        id: 1,
        image: 'https://via.placeholder.com/200x150', // Placeholder image URL
        heading: 'Item 1',
        paragraph: 'This is a short paragraph about Item 1.',
        description: 'Detailed description for Item 1 goes here.',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 2',
        paragraph: 'This is a short paragraph about Item 2.',
        description: 'Detailed description for Item 2 goes here.',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 3',
        paragraph: 'This is a short paragraph about Item 3.',
        description: 'Detailed description for Item 3 goes here.',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/200x150', // Placeholder image URL
        heading: 'Item 1',
        paragraph: 'This is a short paragraph about Item 1.',
        description: 'Detailed description for Item 1 goes here.',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 2',
        paragraph: 'This is a short paragraph about Item 2.',
        description: 'Detailed description for Item 2 goes here.',
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 3',
        paragraph: 'This is a short paragraph about Item 3.',
        description: 'Detailed description for Item 3 goes here.',
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/200x150', // Placeholder image URL
        heading: 'Item 1',
        paragraph: 'This is a short paragraph about Item 1.',
        description: 'Detailed description for Item 1 goes here.',
    },
    {
        id: 8,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 2',
        paragraph: 'This is a short paragraph about Item 2.',
        description: 'Detailed description for Item 2 goes here.',
    },
    {
        id: 9,
        image: 'https://via.placeholder.com/200x150',
        heading: 'Item 3',
        paragraph: 'This is a short paragraph about Item 3.',
        description: 'Detailed description for Item 3 goes here.',
    },
];


class AnimatedList extends Component{

    state = {blogsData:[]}

    componentDidMount() {
        this.getMethod()
      }

      getMethod = async () =>{
        const {blogsData} = this.state;
        const url = "http://localhost:4000/getBlogData"
        const data = await fetch(url)
        const jsonData = await data.json();
        const updatedData = jsonData.map((char) => ({
            techName:char.techName,
            techPic:char.techPic,
            author:char.author,
            authorPic:char.authorPic,
            techPara:char.techPara,
            idNum:char._id,

        }));
        this.setState({blogsData:updatedData})
      }

    render(){
        const {blogsData} = this.state
    return (
        <div className="list-container">
            {blogsData.map(item => (
                <div className="list-item" key={item.idNum}>
                    <img src={item.techPic} alt={item.heading} className="list-item-image" />
                    <h2 className="list-item-heading">{item.techName}</h2>
                    <p className="list-item-paragraph">{item.author}</p>
                    <p className="list-item-description">{item.techPara}</p>
                </div>
            ))}
        </div>
    );
    }
};

export default AnimatedList;
