import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State} from '../../../store/store';
import { getVisibleProducts } from "../../../store/selectors";
import Card from './Card/Card';
import './styles/showcase.scss';

interface Props {
  products?: Product[];
}

const Showcase: FC<Props> = (props) => {
  const { products } = props;

  return (
    <section className="main__shop showcase">
      {products && products.map(product => (
        <div key={product.id}>
          <Card product={product} />
        </div>
      ))}
    </section>
  );
};

const mapStateToProps = (state: State) => ({
  products: getVisibleProducts(state),
});

export default connect(mapStateToProps, null)(Showcase);
