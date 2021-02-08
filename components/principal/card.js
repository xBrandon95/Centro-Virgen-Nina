// import { HashLink as Link } from 'react-router-hash-link';
import Link from "next/link";
import Image from "next/image";

const Card = ({ titulo, enlace, img }) => {
  return (
    <div className="programa col-md-6 col-lg-4 mb-5">
      <Link href={enlace}>
        <a>
          <div className="card shadow">
            <div className="card-image">
              <Image
                src={img}
                className="card-img-top"
                alt={titulo}
                layout="fill"
                loading="eager"
              />
            </div>
            <div className="card-body">
              <div className="content">
                <p className="text-center font-weight-bold">{titulo}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
