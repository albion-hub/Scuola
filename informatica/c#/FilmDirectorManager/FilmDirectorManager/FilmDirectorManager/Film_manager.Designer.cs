namespace FilmDirectorManager
{
    partial class Film_manager
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dG_registri = new DataGridView();
            ((System.ComponentModel.ISupportInitialize)dG_registri).BeginInit();
            SuspendLayout();
            // 
            // dG_registri
            // 
            dG_registri.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dG_registri.Location = new Point(97, 92);
            dG_registri.Name = "dG_registri";
            dG_registri.RowHeadersWidth = 51;
            dG_registri.Size = new Size(574, 230);
            dG_registri.TabIndex = 0;
            // 
            // Film_manager
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(dG_registri);
            Name = "Film_manager";
            Text = "Film Director Manager";
            Load += Film_manager_Load;
            ((System.ComponentModel.ISupportInitialize)dG_registri).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dG_registri;
    }
}
