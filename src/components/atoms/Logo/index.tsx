import tiles from "/someones-tiles.svg";

type Props = {};

export default function Logo({}: Props) {
  return <img src={tiles} alt="Novus logo" width="100%" />;
}
