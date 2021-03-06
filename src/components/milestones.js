import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Milestones extends React.Component {
    milestones = [
        {
            year: 2016,
            goal:
                "<b>Graduated Silesian University of technology</b>, Faculty of Materials Engineering and Metallurgy, Division of Industrial Informatics"
        },
        {
            year: 2013,
            goal:
                "Earned title <b>IBM DB2 Academic Associate</b>: DB2 Database and Application Fundamentals."
        },
        {
            year: 2012,
            goal:
                "Earned Internal Auditor information security management system according to <b>ISO 27001</b>"
        },
        {
            year: 2010,
            goal: "Earned <b>European Computer Driving Licence</b> -&nbsp;level expert"
        }
    ];
    render() {
        return <article className="tile is-child milestones">
            <div className="content">
                <h2 className="title is-2"><FontAwesomeIcon icon="trophy" size="1x" /> Milestones</h2>
                <table>
                    <tbody>
                        {this.milestones.map((milestone) => {
                            return <tr key={milestone.year}>
                                <td>
                                    <p dangerouslySetInnerHTML={{ __html: milestone.goal }}></p>
                                </td>
                                <td>{milestone.year}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </article>
    }
}

export default Milestones;
