import './style.css'

export default function form() {
    return (
        <div className='form-content'>
            <p>Application Form</p>
            <form action="">
                <div><label htmlFor="">Name:</label><br />
                    <input type="text" placeholder="Enter your name" /><br />
                </div>
                <div>
                    <label htmlFor="">Email:</label><br />
                    <input type="email" placeholder="Enter your email" /><br />
                </div>
                <div>
                    <label htmlFor="">Phone no:</label><br />
                    <input type="number" placeholder="Enter your number" /><br />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label><br />
                    <select id="gender" name="gender">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="">Date of Birth:</label><br />
                    <input type="date" /><br />
                </div>

                <div>
                    <label htmlFor="education">Education:</label><br />
                    <select id="education" name="education">
                        <option value="">Select</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Password:</label><br />
                    <input type="password" placeholder='Enter your password' />
                </div>
                <div>
                    <label htmlFor="">Address:</label><br />
                    <textarea placeholder='Enter your address' name="address" id="" rows={5}></textarea><br />
                </div>

                <div>
                    <button className='submit'>Submit</button>
                   <button className='reset'>Reset</button>
                </div>
            </form>
        </div>
    )
}
