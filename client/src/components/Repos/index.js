import React from "react";
import "../../styles/repos.scss";

const Repos = ({ list }) => {
    return (
        <div class="card-group" className="repos__cards">
            {list.map((repoObj) => (
                <div class="card" className="repos__card">
                    <img
                        src={repoObj.owner.avatar_url}
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body" className="repos__card__body">
                        <h5 class="card-title">{repoObj.name} </h5>
                        <p class="card-text" className="repos__card__login">
                            <small class="text-muted">
                                {repoObj.owner.login}
                            </small>
                        </p>
                        <p
                            class="card-text"
                            className="repos__card__description"
                        >
                            {repoObj.description ? repoObj.description : ""}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Repos;
