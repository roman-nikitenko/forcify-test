import React from 'react';
import deleteImage from "../../img/delete.svg";
import editeImage from "../../img/edit.svg";
import './card.scss';

export const Card: React.FC = () => {
  return (
    <section className="card">
      <article className="card-title">
        <h5>
          Lorem ipsum dolor amet, consectetur elit.
        </h5>
      </article>
      <article className="card-description">
        <p className="text-style card-description-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure nesciunt optio, quaerat quisquam velit vero. Blanditiis cupiditate dolor ex expedita facere facilis fugit illum incidunt modi nihil nisi placeat qui quisquam ratione reprehenderit sequi, voluptatem! Aut blanditiis eos harum provident quam ullam voluptatibus! Consectetur culpa debitis excepturi harum labore, maxime officiis quam rerum. Adipisci alias, beatae consequuntur ipsa maiores nostrum rem tempora. Dignissimos eum facere, incidunt neque numquam officiis. Ab, assumenda, cum! Omnis, suscipit unde! Asperiores exercitationem fugiat id minus rem tempore, voluptatum! Amet culpa explicabo maxime molestias ut. Atque aut consequatur cupiditate, deleniti deserunt ducimus et facere necessitatibus, nisi obcaecati officia, quam quasi ratione repellat totam voluptatem voluptates. A accusantium amet animi assumenda atque aut autem deleniti deserunt dolorem doloremque dolorum eius eligendi, ex explicabo fuga iste laboriosam libero magnam maiores maxime natus neque nobis nulla omnis provident quaerat quasi quia quo sint, sit temporibus voluptates voluptatibus voluptatum! Eius laboriosam quas quis sint. Alias consequuntur distinctio dolore dolorum eius facilis harum, id ipsa iste labore mollitia nulla provident quisquam repudiandae sapiente ullam velit voluptatum. A accusamus earum enim nobis nostrum qui suscipit, temporibus? Architecto, eveniet fugiat! Ad delectus dolor dolorem ducimus neque officia repellendus reprehenderit voluptatum? Magnam, necessitatibus.
        </p>
      </article>
      <section className="card-buttons">
        <button>
          <img src={editeImage} alt="Edit button"/>

        </button>
        <button>
          <img src={deleteImage} alt="Delete button"/>

        </button>
      </section>
    </section>
  );
};
