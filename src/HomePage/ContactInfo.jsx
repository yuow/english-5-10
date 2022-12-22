export function ContactInfo() {
  return (
    <section className="section-do">
      <div className="section-do__container container">
        <h1 className="section-do__header">Контакты</h1>
        <div className="section-do__connections">
          <div className="section-do__connections-item">
            <img src="icon/phone_icon.svg" alt="" />
            <p className="section-do__connections-text">Тел:</p>
            <a href=""></a>
          </div>
          <div className="section-do__connections-item">
            <img src="icon/email_icon.svg" alt="" />
            <p className="section-do__connections-text">Эл. почта:</p>
            <a href=""></a>
          </div>
          <div className="section-do__connections-item">
            <img src="icon/vk_icon.svg" alt="" />
            <p className="section-do__connections-text">VK:</p>
            <a href=""></a>
          </div>
        </div>
        <div className="section-do__form">
          <h2 className="section-do__form-header">Остались вопросы?</h2>
          <p className="section-do__form-text">
            Заполните форму и мы свяжемся с вами!
          </p>
          <form className="section-do__form-items" action="#">
            <label className="section-do__form-item">
              Тел:
              <input className="form-input max" name="phone" type="" />
            </label>
            <label className="section-do__form-item">
              Имя:
              <input className="form-input max" name="name" type="text" />
            </label>
            <label className="section-do__form-item">
              Вопрос:
              <input className="form-input max" name="question" type="text" />
            </label>
            <button className="form-button" type="submit">
              Отправить!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
