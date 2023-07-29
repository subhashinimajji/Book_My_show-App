import { blue } from '@material-ui/core/colors';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../Styling/PaymentsPage.module.css';


const SecondSection = () => {
    const city = useSelector(state => state.app.city)
    const booking_details = useSelector(state => state.booking_details);

    const handleChange = (e) => {

    }
    return (
        <div>
            <div className={styles.summeryPart}>
                <div>Booking Summery</div>
                <div className={styles.categories}>
                    <div style={{ textTransform: 'uppercase' }}>{booking_details.cinemas_name}</div>
                    <div>3Ticket(s)</div>
                </div>
                <span>AUDI 5</span>
                {/* <div className={styles.categories}>
                    <div style={{fontSize:'12px', lineHeight:'25px'}}>Internet handeling fees</div>
                    <div>Rs 28.00</div>
                </div> */}
                <div className={styles.line}></div>
                <div className={styles.categories}>
                    <div>Sub total</div>
                    <div>Rs.283</div>
                </div>

                <div className={styles.charity}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" onChange={handleChange} />
                            <img src="https://in.bmscdn.com/webin/common/icons/bookasmile-logo.svg" alt="" />
                        </div>
                        <div>Rs 1</div>
                    </div>
                    <div style={{ fontSize: '12px', padding: "10px 20px" }}>
                        <div>Rs. 1 will be added to your transaction as a donation.</div>
                        <div>Re.1/1 Ticket</div>
                    </div>
                </div>

                <div style={{ fontSize: '12px', margin: '0 30px', fontWeight: '600' }}>Your current State is <a href="">{city}</a></div>
                <div className={styles.total}>
                    <div>Amount Payable</div>
                    <div>Rs.284</div>
                </div>
                {/* <h3 className={styles.ticketType}>Select Ticket Type</h3> */}

                <div className={styles.cancellation_policy}>You can cancel the tickets 20 min(s) before the show. Refunds will be done according to <a href="">Cancellation Policy</a></div>
            </div><a href="/pay">
            <div style={{textAlign:"center"}}><button style={{width:'15rem',height:'50%',fontSize:'20px',borderRadius:'55px',backgroundColor:'pink'}}>Pay</button></div></a>
        </div>
        
    )
}

export default SecondSection
