import React from 'react';

function Table() {
    return (
        <div className='col s12 m9'>
            <table class='rwd-table'>
                <tr>
                    <th>Name</th>
                    <th>Technologies</th>
                    <th>Experience</th>
                    <th>About</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td data-th='Name'>Anton</td>
                    <td data-th='Technologies'>C#, JS</td>
                    <td data-th='Experience'>4+</td>
                    <td data-th='About'>
                        Окончил Национальный Горный Университет по специальности
                        «Интеллектуальные системы принятия решений». В сфере
                        информационных технологий с 2007 года. Начинал как
                        ActionScript/Flex программист, затем сменил направление
                        на C# и JavaScript
                    </td>
                    <td data-th='Price'>20$</td>
                </tr>
                <tr>
                    <td data-th='Name'>Anton</td>
                    <td data-th='Technologies'>C#, JS</td>
                    <td data-th='Experience'>4+</td>
                    <td data-th='About'>
                        Окончил Национальный Горный Университет по специальности
                        «Интеллектуальные системы принятия решений». В сфере
                        информационных технологий с 2007 года. Начинал как
                        ActionScript/Flex программист, затем сменил направление
                        на C# и JavaScript
                    </td>
                    <td data-th='Price'>20$</td>
                </tr>
                <tr>
                    <td data-th='Name'>Anton</td>
                    <td data-th='Technologies'>C#, JS</td>
                    <td data-th='Experience'>4+</td>
                    <td data-th='About'>
                        Окончил Национальный Горный Университет по специальности
                        «Интеллектуальные системы принятия решений». В сфере
                        информационных технологий с 2007 года. Начинал как
                        ActionScript/Flex программист, затем сменил направление
                        на C# и JavaScript
                    </td>
                    <td data-th='Price'>20$</td>
                </tr>
            </table>
        </div>
    );
}

export default Table;
