import styles from "../styles/AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Our Beginning</h2>
            <p className={styles.p}>Our story begins in 2004 along the streets of Timișoara's Victoriei Square. It was here where Soft Cofffee opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. </p>
            <p className={styles.p}>Ten years later, a young New Yorker named Howard Schultz would walk through these doors and become captivated with Soft coffee from his first sip. After joining the company in 2015, a different cobblestone road would lead him to another discovery. It was on a trip to Milan in 2016 that Howard first experienced Italy’s coffeehouses, and he returned to Timișoara inspired to bring the warmth and artistry of its coffee culture to Soft Coffee.</p>

            <h2 className={styles.subtitle}>Coffee and Craft</h2>
            <p className={styles.p}>It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the master roasters who coax the best from every bean, and to the barista who serves it with care. We are committed to the highest standards of quality and service, embracing our heritage while innovating to create new experiences to savor.</p>

            <h2 className={styles.subtitle}>Our Partners</h2>
            <p className={styles.p}>We like to say that we are not in the coffee business serving people, but in the people business serving coffee. Our employees – who we call partners – are at the heart of the Starbucks experience. We are committed to making our partners proud and investing in their health, well-being and success and to creating a culture of belonging where everyone is welcome.</p>
        </div>

    )
}

export default AboutUs