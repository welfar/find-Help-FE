import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadNews } from "../store/selectAdminReducer";

function UploadNews() {
	const dispatch = useDispatch();
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);

	const selectImage = (e) => {
		setFile(e.target.files[0]);
		generatePreview(e.target.files[0]);
	};

	const generatePreview = (file) => {
		const result = URL.createObjectURL(file);
		setImage(result);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(uploadNews(file));
	};

  const onSave = () => {
    const modalEl = document.getElementById("UploadNews");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div
					className="modal fade"
					id="UploadNews"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabIndex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">
									Subir noticias
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<div className="modal-dialog modal-dialog-scrollable"></div>
								<input
									type="file"
									id="file"
									onChange={selectImage}
									accept="image/*"
									style={{ color: "black" }}
								/>
                <div className="imgContainer">
								{image && <img src={image} alt="preview" />}
                </div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-primary btn-sm"
									data-bs-dismiss="modal"
								>
									Cancelar
								</button>
								<button
									className="btn btn-primary btn-sm"
									img
									onClick={(e) => {
                    setImage(null)
                    {onSave()}
                  }}
								>
									Cargar
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default UploadNews;
