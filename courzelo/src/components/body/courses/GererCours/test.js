<div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="heading9">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
            <h5>Quiz</h5>
        </button>

    </div>
    <div id="collapse9" className="collapse " aria-labelledby="heading9" data-parent="#accordionExample">
        <div className="card-body">
            <div className="row">
                <div className="card col-sm-12 col-md-12" style={{ backgroundColor: '#F9F7F7' }} >
                    <h5 style={{ color: 'black' }}><b style={{ color: '#A3E4D7', fontSize: '18px' }}> Question 1  </b> </h5>


                    <div >
                        {/* Tab 1 */}

                        <div >

                            <>

                                <div className="cardd card-body">
                                    <div className="form-group">
                                        <textarea
                                            placeholder=" Type your Question"
                                            label="queustion 1"
                                            onChange={event => handleChangeInput(inputField.id, event)}
                                            name="q1"
                                            defaultValue=''
                                            margin="normal"
                                            fullWidth
                                        />
                                        <div className="row mt-1">

                                            <div className="col-md-4"><label className="font-weight-bold"> answer </label>
                                                <textarea
                                                    placeholder=" Type the correct answer"
                                                    label="rv 1"
                                                    onChange={event => handleChangeInput(inputField.id, event)}
                                                    name="rv1"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />
                                            </div>

                                            <div className="col-md-4"><label className="font-weight-bold">  Answer</label>
                                                <textarea
                                                    placeholder=" Type other answer"
                                                    label="rf 1"
                                                    onChange={event => handleChangeInput(inputField.id, event)}
                                                    name="rf1"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />


                                            </div>
                                            <div className="col-md-4"><label className="font-weight-bold">  Answer</label>
                                                <textarea
                                                    placeholder=" Type other answer"
                                                    label="rf 2"
                                                    onChange={event => handleChangeInput(inputField.id, event)}
                                                    name="rf2"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </>


                        </div>

                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Add question
                        </a>
                    </div>

                    <br />
                    <br />
                      </div>


            </div>
        </div>
    </div>
</div>

</div>