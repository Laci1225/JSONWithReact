import PropTypes from "prop-types";

export default function Refresh(props) {
    return (
        <div>
            <button type="button" className="refresh" onClick={props.onClick}>
                Refresh
            </button>
        </div>
    )
}
Refresh.propTypes = {
    onClick: PropTypes.func
}