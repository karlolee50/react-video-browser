import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { retrievedVideos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ 
            retrievedVideos: response.data.items,
            selectedVideo: response.data.items[0]
         });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmitForm={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} listOfVideos={this.state.retrievedVideos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;