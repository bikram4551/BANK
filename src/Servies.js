import React from 'react'

const Servies = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className='maincard'>
            <div className='card-1'>
              <div className='row'>
                <div><div className="bal">Balance</div>
                  <div className='rupya' >$5,756</div></div>
                <div className='chip'>
                </div>
              </div>
              <div className='row1'>
                <div><div className='holder'>CARD HOLDER</div>
                  <div className='eddy'>Eddy Cusuma</div>
                </div>

                <div><div className='valid'>VALID</div>
                  <div className='no'>12/22</div>
                </div>
              </div>
              <div className='row2'>
                <div><div className='number'>3778***********123</div></div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className='maincard'>
            <div className='card-2'>
              <div className='row'>
                <div><div className="bal">Balance</div>
                  <div className='rupya' >$5,756</div></div>
                <div className='chip'>
                </div>
              </div>
              <div className='row1'>
                <div><div className='holder'>CARD HOLDER</div>
                  <div className='eddy'>Eddy Cusuma</div>
                </div>

                <div><div className='valid'>VALID</div>
                  <div className='no'>12/22</div>
                </div>
              </div>
              <div className='row2'>
                <div><div className='number'>3778***********123</div></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Servies