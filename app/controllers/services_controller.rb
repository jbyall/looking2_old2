class ServicesController < ApplicationController
  before_action :set_service, only: [:edit, :update, :destroy]

  # GET /services
  # GET /services.json
  def index
    @services = Service.all
    #debug()
  end

  # GET /services/1
  # GET /services/1.json
  def show
  end

  def search
    @title = service_search_params[:title]
    @category = service_search_params[:category]
    #@category = physician_search_params[:categorySearchDisplay]
    #build search query
    # query = String.new
    # if !@name.blank?
    #   query += "nameSearch = #{@name}, "
    # end
    # if !@location.blank?
    #   query += "locationSearch = #{@location}, "
    # end
    # if !@category.blank?
    #   query += "categorySearchDisplay = #{@category}"
    # else
    #   query = query.chop.chop
    # end
    query = {}
    query[:title] = /#{@title}/i unless @title.blank?
    query[:category] = /#{@category}/i unless @category.blank?
    #query[:categorySearchDisplay] = @category unless @category.blank?
    
    @services = Service.all(query)
    if @services.count > 0
      render "index"
    else
      
      redirect_to :action => 'index'
    end
    #debug()
    # if query != nil
    #   @physicians = Physician.for_js(query)
    # else
    #   @physicians = Physician.all
    # end
    # @physicians = Physician.where(nameSearch: @name)
  end

  # GET /services/new
  def new
    @service = Service.new
  end

  # GET /services/1/edit
  def edit
  end

  # POST /services
  # POST /services.json
  def create
    #debug();
    @service = Service.new(service_params)

    respond_to do |format|
      if @service.save
        format.html { redirect_to @service, notice: 'Service was successfully created.' }
        format.json { render :show, status: :created, location: @service }
      else
        format.html { render :new }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /services/1
  # PATCH/PUT /services/1.json
  def update
    respond_to do |format|
      if @service.update(service_params)
        format.html { redirect_to @service, notice: 'Service was successfully updated.' }
        format.json { render :show, status: :ok, location: @service }
      else
        format.html { render :edit }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /services/1
  # DELETE /services/1.json
  def destroy
    @service.destroy
    respond_to do |format|
      format.html { redirect_to services_url, notice: 'Service was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def service_params
      params.require(:service).permit!
    end
    def service_search_params
      params.permit(:title, :category)
    end
end
