import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articleActions';

class AllArticles extends Component {
    // componentDidMount() {
    //     fetchArticles();
    // }
    // render() {
    //     const { error, loading, articles } = this.props;

    //     if (error) {
    //         return <div>Error! {error.message}</div>;
    //     }

    //     if (loading) {
    //         return<div>Loading...</div>;
    //     }

    //     const articleItems = articles.map(article => (
    //         <div key={article.id}>
    //             <h3>{article.title}</h3>
    //             <p>{article.body}</p>
    //         </div>
    //     ));
    render(){
        return(
            <main>
                <h1>topics</h1>
                {/* {articleItems} */}
            </main>
        )
    }
}
// AllArticles.propTypes = {
//     fetchArticles: PropTypes.func.isRequired,
//     articles: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => ({
    articles: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error
})


export default connect(mapStateToProps)(AllArticles);