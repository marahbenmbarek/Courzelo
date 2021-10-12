import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
import TextField from '@material-ui/core/TextField';
import './StepForm.css';





export class Chapitre extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { course, handleChangePhase1, handleChangePhase2, handleChangePhase3, handleChangePhase4 } = this.props;
        return (
            <div className="main">

                <div className="side"></div>
                <div className="userform">
                    <MuiThemeProvider>
                        <>
                            <h2>Chapitres</h2>
                            <p className="parag">Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.</p>
                            <div className="boxcard">
                                <button className="buttonBoxCard">+</button>
                                <div className="accordion" id="accordionExample">

                                    <div className="cardd">
                                        <div className="cardd-header" id="headingOne">

                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h5>Phase 1: <b> Why? </b> </h5>
                                            </button>

                                        </div>
                                        <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card">

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                    <div className="tabset">
                                                        {/* Tab 1 */}
                                                        <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                        <label htmlFor="tab4">Select content type</label>

                                                        <div className="tab-panels">

                                                            <>
                                                                <section id="marzen" className="tab-panel">
                                                                    <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                    <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                    <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                </section>






                                                                <div className="collapse" id="collapseExample4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <CKEditor
                                                                                editor={ClassicEditor}

                                                                                onChange={handleChangePhase4}

                                                                            />
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleImg4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>image</p>
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleVid4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>vid</p>
                                                                        </div>    </div>
                                                                </div>
                                                            </>


                                                        </div>


                                                    </div>


                                                </div>      </div>
                                        </div>
                                    </div>












                                    <div className="cardd">
                                        <div className="cardd-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <h5>Phase 2: <b> Why? </b> </h5>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                    <div className="tabset">
                                                        {/* Tab 2 */}
                                                        <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                        <label htmlFor="tab4">Select content type</label>

                                                        <div className="tab-panels">

                                                            <>
                                                                <section id="marzen" className="tab-panel">
                                                                    <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                    <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                    <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                </section>






                                                                <div className="collapse" id="collapseExample4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <CKEditor
                                                                                editor={ClassicEditor}

                                                                                onChange={handleChangePhase4}

                                                                            />
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleImg4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>image</p>
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleVid4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>vid</p>
                                                                        </div>    </div>
                                                                </div>
                                                            </>


                                                        </div>


                                                    </div>


                                                </div>      </div>
                                        </div>
                                    </div>

















                                    <div className="cardd">
                                        <div className="cardd-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <h5>Phase 3: <b> Why? </b> </h5>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                    <div className="tabset">
                                                        {/* Tab 4 */}
                                                        <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                        <label htmlFor="tab4">Select content type</label>

                                                        <div className="tab-panels">

                                                            <>
                                                                <section id="marzen" className="tab-panel">
                                                                    <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                    <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                    <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                </section>






                                                                <div className="collapse" id="collapseExample4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <CKEditor
                                                                                editor={ClassicEditor}

                                                                                onChange={handleChangePhase4}

                                                                            />
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleImg4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>image</p>
                                                                        </div>    </div>
                                                                </div>

                                                                <div className="collapse" id="collapseExampleVid4">
                                                                    <div className="cardd card-body">
                                                                        <div className="form-group">
                                                                            <p>vid</p>
                                                                        </div>    </div>
                                                                </div>
                                                            </>


                                                        </div>


                                                    </div>


                                                </div>      </div>
                                        </div>
                                    </div>
                                </div>






                                <div className="cardd">
                                    <div className="cardd-header" id="headingFour">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <h5>Phase 4: <b> Why? </b> </h5>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>

                                                <div className="tabset">
                                                    {/* Tab 4 */}
                                                    <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                    <label htmlFor="tab4">Select content type</label>

                                                    <div className="tab-panels">

                                                        <>
                                                            <section id="marzen" className="tab-panel">
                                                                <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                            </section>






                                                            <div className="collapse" id="collapseExample4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}

                                                                            onChange={handleChangePhase4}

                                                                        />
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleImg4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>image</p>
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleVid4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>vid</p>
                                                                    </div>    </div>
                                                            </div>
                                                        </>


                                                    </div>


                                                </div>


                                            </div>      </div>
                                    </div>
                                </div>







                                <div className="cardd">
                                    <div className="cardd-header" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <h5>Phase 5: <b> Why? </b> </h5>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                <div className="tabset">
                                                    {/* Tab 4 */}
                                                    <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                    <label htmlFor="tab4">Select content type</label>

                                                    <div className="tab-panels">

                                                        <>
                                                            <section id="marzen" className="tab-panel">
                                                                <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                            </section>






                                                            <div className="collapse" id="collapseExample4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}

                                                                            onChange={handleChangePhase4}

                                                                        />
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleImg4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>image</p>
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleVid4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>vid</p>
                                                                    </div>    </div>
                                                            </div>
                                                        </>


                                                    </div>


                                                </div>


                                            </div>      </div>
                                    </div>
                                </div>






                                <div className="cardd">
                                    <div className="cardd-header" id="headingSix">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                <h5>Phase 6: <b> Why? </b> </h5>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                <div className="tabset">
                                                    {/* Tab 4 */}
                                                    <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                    <label htmlFor="tab4">Select content type</label>

                                                    <div className="tab-panels">

                                                        <>
                                                            <section id="marzen" className="tab-panel">
                                                                <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                            </section>






                                                            <div className="collapse" id="collapseExample4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}

                                                                            onChange={handleChangePhase4}

                                                                        />
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleImg4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>image</p>
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleVid4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>vid</p>
                                                                    </div>    </div>
                                                            </div>
                                                        </>


                                                    </div>


                                                </div>


                                            </div>      </div>
                                    </div>
                                </div>



                                <div className="cardd">
                                    <div className="cardd-header" id="headingSeven">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                <h5>Phase 7: <b> Why? </b> </h5>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                <div className="tabset">
                                                    {/* Tab 4 */}
                                                    <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                    <label htmlFor="tab4">Select content type</label>

                                                    <div className="tab-panels">

                                                        <>
                                                            <section id="marzen" className="tab-panel">
                                                                <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                            </section>






                                                            <div className="collapse" id="collapseExample4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}

                                                                            onChange={handleChangePhase4}

                                                                        />
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleImg4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>image</p>
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleVid4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>vid</p>
                                                                    </div>    </div>
                                                            </div>
                                                        </>


                                                    </div>


                                                </div>


                                            </div>      </div>
                                    </div>
                                </div>







                                <div className="cardd">
                                    <div className="cardd-header" id="headingEight">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                <h5>Phase 8: <b> Why? </b> </h5>
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="card">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis.</p>


                                                <div className="tabset">
                                                    {/* Tab 8 */}
                                                    <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                                                    <label htmlFor="tab4">Select content type</label>

                                                    <div className="tab-panels">

                                                        <>
                                                            <section id="marzen" className="tab-panel">
                                                                <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                            </section>






                                                            <div className="collapse" id="collapseExample4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <CKEditor
                                                                            editor={ClassicEditor}

                                                                            onChange={handleChangePhase4}

                                                                        />
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleImg4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>image</p>
                                                                    </div>    </div>
                                                            </div>

                                                            <div className="collapse" id="collapseExampleVid4">
                                                                <div className="cardd card-body">
                                                                    <div className="form-group">
                                                                        <p>vid</p>
                                                                    </div>    </div>
                                                            </div>
                                                        </>


                                                    </div>


                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <br />

                            <br />

                            <br />




                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={this.back}
                            >Back</Button>

                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                            >Continue</Button>




                        </>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default Chapitre;
