import React from 'react';
import DataRow from './DataRow';
// import AuthService from '../../../handlers/ca/temp/AuthService';
// import FetchApi from '../../../utils/FetchAPI';
import './Leaderboard.css';
export default class LeaderboardIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null,
            rank: '-'
        }
        // this.Auth = new AuthService();
    }
    componentDidMount() {
        // const authtoken = this.Auth.getToken()
        // FetchApi('GET', '/api/ca/temp/leaderboard', null, authtoken)
        //     .then(r => {
        //         if (r && r.data && r.data.length > 0) {
        //             this.setState({ users: r.data })
        //         } else {
        //             console.log(r)
        //         }
        //     })
        //     .catch(e => console.log(e));

    }
    render() {
        return (
            <div className="campusAmb-leader-indexMain">
                <div className="campusAmb-heading">
                    <div className="campusAmb-heading-content">TOP 10</div>
               
                    <div className="hline"></div>
                </div>

                <div className="campusAmb-leader-parent-maintable">
                    <div className="campusAmb-leader-maintable">
                        <table className="campusAmb-leaderboard-table">
                            <tbody>
                                <tr className="campusAmb-leader-heading">
                                    <th>RANK</th>
                                    <th>NAME</th>
                                    <th>UNIVERSITY</th>
                                    <th>POINTS</th>
                                </tr>
                                {this.state.users ? this.state.users.map((user, index) => {
                                    return <DataRow key={`leader${index}`} data={user} index={index} />
                                }) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
