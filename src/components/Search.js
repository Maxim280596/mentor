import React from 'react';
import '../index.css';
function Search() {
    return (
        <div class='col s3 '>
            Technologies
            <div className='bl-scroll'>
                <form action='#'>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>JS</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>React</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>C#</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>C++</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>C</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>Flutter</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>Java</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>Swift</span>
                        </label>
                    </p>
                </form>
            </div>
            <div>
                Опыт
                <p class='range-field'>
                    {' '}
                    <input type='range' id='test5' min='0' max='10' />
                </p>
            </div>
            <div>
                <p>
                    <label>
                        <input name='group1' type='radio' checked />
                        <span>Платно</span>
                    </label>

                    <label>
                        <input name='group1' type='radio' />
                        <span>Бесплатно</span>
                    </label>
                </p>
            </div>
        </div>
    );
}

export default Search;
