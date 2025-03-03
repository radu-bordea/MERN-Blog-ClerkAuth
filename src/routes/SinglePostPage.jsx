import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import PostMenuActions from "../components/PostMenuActions";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail  */}
      <div className="flex-col gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            possimus!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-amber-600">John Doe</Link>
            <span>on</span>
            <Link className="text-amber-600">Lifestyle</Link>
            <span>2 days ago</span>
          </div>
          <p className=" text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            necessitatibus, aliquid harum itaque aperiam provident minima quod
            aspernatur, repellat dicta sint corporis. Nostrum laboriosam
            repudiandae debitis, inventore amet saepe magni, ut exercitationem
            dolor fugit error aspernatur possimus vero temporibus cum pariatur
            cumque eos. A commodi laudantium sunt temporibus, eos nemo.
          </p>
        </div>
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text  */}
        <div className="md:w-4/5 lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            repellendus, et officiis enim omnis, culpa veniam, facilis corporis
            esse similique explicabo beatae laborum tempore ex sequi quasi
            architecto eveniet voluptates odio ipsum illo sapiente!
            Necessitatibus nam est eum, temporibus quisquam fuga corrupti, magni
            aspernatur vero quae eius, aut laboriosam fugiat. Earum, sequi
            possimus magni ad, culpa, enim iure quis unde facilis quibusdam
            aliquam alias ipsam aliquid. Minima nulla beatae porro nam a
            exercitationem dicta! Dolorem corporis hic perferendis molestias
            inventore in assumenda illo, iusto quo quis iure beatae cumque
            voluptatem natus qui amet libero nisi sapiente voluptates
            recusandae? Explicabo, est?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            facilis minus dolorum alias, ea sunt eius! Dignissimos tempora
            inventore in quidem ab quod ratione adipisci repellat assumenda
            minus reiciendis laborum aut, asperiores, nobis nemo ullam magnam,
            ipsam facilis nulla. Voluptate, voluptas! Unde praesentium
            doloremque voluptatem quam! Sunt aut eius soluta veniam a odio saepe
            vitae dolorem corrupti quas velit, minima voluptates magnam
            cupiditate beatae quod. Neque quaerat nihil suscipit? Reprehenderit
            deleniti, dicta ex, magni eum, fugiat eos possimus earum
            necessitatibus porro quas. Distinctio amet modi voluptatum at
            laudantium ex itaque architecto, illum vel recusandae ut asperiores
            delectus blanditiis veritatis! Culpa.
          </p>
        </div>
        {/* menu  */}
        <div className="w-full md:w-1/5 px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                path="/userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <Link className="text-amber-600">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, cum?
            </p>
            <div className="flex gap-2">
              <Link>
                <FaFacebookSquare className="text-2xl text-blue-600" />
              </Link>
              <Link>
                <FaSquareInstagram className="text-2xl text-pink-400" />
              </Link>
            </div>
          </div>

          <div>
            <PostMenuActions />
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
