import React from 'react';
import {connect} from 'react-redux';
import Search from '../components//Search';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField,requestRobots } from './../actions';


class App extends React.Component {
   
    componentDidMount() {
       this.props.requestRobots();
    }
    onSearchChange = (e) => {
        
        this.props.setSearchField(e.target.value);
       
    }
    render() {
        
        const filteredRobots = this.props.robots.filter(robot => {
                return robot.name.toLowerCase().indexOf(this.props.searchField.toLowerCase()) >-1;
        });
                      
        
            return (
                
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <Search onSearchChange={this.onSearchChange}/>
                    <Scroll>
                    {this.props.isPending ? <h1>Loading</h1> :
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    }
                    </Scroll>
                    
                </div>
            )
           
        }

    }
    const mapStateToProps = (state) => ({
        searchField: state.searchRobots.search,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        errors: state.requestRobots.errors
    })
  
export default connect(mapStateToProps, {setSearchField,requestRobots})(App);
