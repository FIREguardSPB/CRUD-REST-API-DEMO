import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card/Card";

const List = () => {
    const posts = useSelector(store => store.posts)
    return (
        <div>
            {posts && posts.map((el, i) => <Card key={(Math.random() * Date.now())} index={i+1} data={el}/>)}
        </div>
    );
};

export default List;